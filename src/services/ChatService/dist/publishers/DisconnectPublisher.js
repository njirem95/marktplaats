"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectPublisher {
    constructor(_amqp) {
        this._amqp = _amqp;
    }
    publish(message) {
        const user = "Anonymous"; // haven't implemented a username system yet
        this._amqp.publish('chatservice', '', Buffer.from(user), { "headers": { "messageType": "disconnect" } });
    }
}
exports.DisconnectPublisher = DisconnectPublisher;
//# sourceMappingURL=DisconnectPublisher.js.map