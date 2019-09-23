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

const exchangeName: string = 'chatservice';

const io: socketio.Server = socketio.listen(1337);

const events: Map<string, Event> = new Map<string, Event>();
events.set("disconnect", new DisconnectEvent(io));

const handler: Connection = new ChatServerHandler(io, events);

amqplib.connect('amqp://merijn:verysecure@127.0.0.1', function (error: Error, connection: amqplib.Connection) {
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

        // Start chat message receiver
        const chatMessageReceiver: Receiver = new ChatMessageReceiver(io);
        channel.assertQueue("messages", { durable: true}, function (error2, _ok) {
            if (error2) {
                throw error2;
            }

            channel.bindQueue("messages", exchangeName, '');

            channel.consume("messages", chatMessageReceiver.handle, { noAck: true });
        });
    });
});

handler.handle();