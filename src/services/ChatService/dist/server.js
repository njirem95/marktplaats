"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const amqplib = require("amqplib/callback_api");
const ChatServerHandler_1 = require("./network/ChatServerHandler");
const DisconnectEvent_1 = require("./events/DisconnectEvent");
const ChatMessageEvent_1 = require("./events/ChatMessageEvent");
const ChatMessagePublisher_1 = require("./publishers/ChatMessagePublisher");
const ChatMessageReceiver_1 = require("./receivers/ChatMessageReceiver");
const exchangeName = 'chatservice';
const io = socketio.listen(1337);
const events = new Map();
events.set("disconnect", new DisconnectEvent_1.DisconnectEvent(io));
const handler = new ChatServerHandler_1.ChatServerHandler(io, events);
amqplib.connect('amqp://merijn:verysecure@127.0.0.1', function (error, connection) {
    if (error) {
        throw error;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        channel.assertExchange(exchangeName, 'fanout', {
            durable: false
        });
        const chatMessagePublisher = new ChatMessagePublisher_1.ChatMessagePublisher(channel);
        events.set("chat message", new ChatMessageEvent_1.ChatMessageEvent(chatMessagePublisher));
        // Start chat message receiver
        const chatMessageReceiver = new ChatMessageReceiver_1.ChatMessageReceiver(io);
        channel.assertQueue("messages", { durable: true }, function (error2, _ok) {
            if (error2) {
                throw error2;
            }
            channel.bindQueue("messages", exchangeName, '');
            channel.consume("messages", chatMessageReceiver.handle, { noAck: true });
        });
    });
});
handler.handle();
//# sourceMappingURL=server.js.map