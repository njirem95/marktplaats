"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageHandler {
    constructor(_receivers) {
        this._receivers = _receivers;
    }
    handle(message) {
        const messageType = this.getMessageType(message);
        if (!this.hasMessageReceiver(messageType)) {
            console.log('Unable to find message receiver');
            return;
        }
        console.log(`Handling message with type ${messageType}`);
        const receiver = this.getMessageReceiver(messageType);
        receiver.handle(message);
    }
    hasMessageReceiver(messageType) {
        return this._receivers.has(messageType);
    }
    getMessageReceiver(messageType) {
        return this._receivers.get(messageType);
    }
    getMessageType(message) {
        const type = message.properties.headers['messageType'];
        if (type.length === 0) {
            throw new Error('Invalid type');
        }
        return type;
    }
}
exports.MessageHandler = MessageHandler;
//# sourceMappingURL=MessageHandler.js.map