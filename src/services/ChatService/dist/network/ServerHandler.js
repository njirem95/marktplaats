"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatServerHandler {
    constructor(_server, _messages) {
        this._server = _server;
        this._messages = _messages;
    }
    handle() {
        const messages = this._messages; // why?
        this._server.on('connection', function (session) {
            console.log("Handling incoming connection...");
            messages.forEach(function (messageHandler, value) {
                session.on(value, function (data) {
                    return messageHandler.handle(data);
                });
            });
        });
    }
}
exports.ChatServerHandler = ChatServerHandler;
//# sourceMappingURL=ServerHandler.js.map