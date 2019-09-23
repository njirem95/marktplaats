"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageReceiver {
    constructor(_server) {
        this._server = _server;
    }
    handle(msg) {
        // Push the incoming message to the receiving socket server.
        console.log(`Got message: ${msg.content}`);
        console.log(this._server);
    }
}
exports.ChatMessageReceiver = ChatMessageReceiver;
//# sourceMappingURL=ChatMessageReceiver.js.map