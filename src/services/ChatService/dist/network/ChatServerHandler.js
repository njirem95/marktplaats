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
            messages.forEach(function (message, value) {
                session.on(value, function (out) {
                    // TODO Resolve outgoing message by using the OutgoingMessageResolver class.
                    return message.handle(out);
                });
            });
        });
    }
}
exports.ChatServerHandler = ChatServerHandler;
//# sourceMappingURL=ChatServerHandler.js.map