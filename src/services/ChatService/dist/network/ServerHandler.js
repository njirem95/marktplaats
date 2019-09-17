"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatServerHandler {
    constructor(_server, _messages) {
        this._server = _server;
        this._messages = _messages;
    }
    handle() {
        this._server.on('connection', (session) => {
            console.log("Handling incoming connection...");
            this._messages.forEach(function (message, value) {
                session.on(value, function (data) {
                    return message.handle(data);
                });
            });
        });
    }
}
exports.ChatServerHandler = ChatServerHandler;
//# sourceMappingURL=ServerHandler.js.map