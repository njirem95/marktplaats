"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageReceiver {
    constructor(_server) {
        this._server = _server;
    }
    handle(msg) {
        const content = msg.content.toString();
        this._server.emit('chat message', content);
    }
}
exports.ChatMessageReceiver = ChatMessageReceiver;
//# sourceMappingURL=ChatMessageReceiver.js.map