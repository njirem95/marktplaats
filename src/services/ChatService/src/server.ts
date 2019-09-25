import * as socketio from "socket.io";
import * as amqplib from "amqplib/callback_api";
import { ChatServerHandler } from "./network/ChatServerHandler";
import { DisconnectEvent } from "./events/DisconnectEvent";
import { ChatMessageEvent } from "./events/ChatMessageEvent";
import { Event } from "./events/Event";
import { Connection } from "./network/Connection";
import { ChatMessagePublisher } from "./publishers/ChatMessagePublisher";
import { Publisher } from "./publishers/Publisher";
import { Receiver } from "./receivers/Receiver";
import { ChatMessageReceiver } from "./receivers/ChatMessageReceiver";
import { MessageHandler } from "./receivers/MessageHandler";
import { DisconnectReceiver } from "./receivers/DisconnectReceiver";
import { DisconnectPublisher } from "./publishers/DisconnectPublisher";

const exchangeName: string = 'chatservice';

const io: socketio.Server = socketio.listen(1337);

const events: Map<string, Event> = new Map<string, Event>();

const handler: Connection = new ChatServerHandler(io, events);

amqplib.connect('amqp://merijn:verysecure@192.168.178.88', function (error: Error, connection: amqplib.Connection) {
    if (error) {
        throw error;
    }

    connection.createChannel(function(error1: Error, channel: amqplib.Channel) {
        if (error1) {
            throw error1;
        }

        channel.assertExchange(exchangeName, 'fanout', {
            durable: false
        });

        const chatMessagePublisher: Publisher = new ChatMessagePublisher(channel);
        events.set("chat message", new ChatMessageEvent(chatMessagePublisher));


        const disconnectPublisher: Publisher = new DisconnectPublisher(channel);
        events.set("disconnect", new DisconnectEvent(disconnectPublisher));

        channel.assertQueue("", { durable: false}, function (error2, _ok) {
            if (error2) {
                throw error2;
            }

            const receivers: Map<String, Receiver> = new Map<String, Receiver>();
            receivers.set("chat message", new ChatMessageReceiver(io));
            receivers.set("disconnect", new DisconnectReceiver(io));
            
            const messageHandler: MessageHandler = new MessageHandler(receivers);

            channel.bindQueue("", exchangeName, '');

            channel.consume("", (msg: amqplib.Message) => messageHandler.handle(msg), { noAck: true });
        });
    });
});

handler.handle();