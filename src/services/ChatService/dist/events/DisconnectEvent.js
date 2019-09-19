"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectEvent {
    constructor(_server) {
        this._server = _server;
    }
    handle(session, data) {
        this._server.emit('chat message', `Someone left the server.`);
    }
}
exports.DisconnectEvent = DisconnectEvent;
//# sourceMappingURL=DisconnectEvent.js.map