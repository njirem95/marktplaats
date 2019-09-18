"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatServerHandler {
    constructor(_server, _events) {
        this._server = _server;
        this._events = _events;
    }
    handle() {
        this._server.on('connection', (session) => {
            console.log(`Handling incoming connection for ${session.handshake.address}`);
            this._events.forEach(function (event, value) {
                session.on(value, function (data) {
                    event.handle(session, data);
                });
            });
        });
    }
}
exports.ChatServerHandler = ChatServerHandler;
//# sourceMappingURL=ChatServerHandler.js.map