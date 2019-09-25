"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessagePublisher {
    constructor(_amqp) {
        this._amqp = _amqp;
    }
    publish(message) {
        this._amqp.publish('chatservice', '', Buffer.from(message), { "headers": { "messageType": "chat message" } });
        console.log(`Sent ${message} to RabbitMQ`);
    }
}
exports.ChatMessagePublisher = ChatMessagePublisher;
//# sourceMappingURL=ChatMessagePublisher.js.map