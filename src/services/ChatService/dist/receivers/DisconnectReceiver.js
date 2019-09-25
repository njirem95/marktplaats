"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectReceiver {
    constructor(_server) {
        this._server = _server;
    }
    handle(msg) {
        const user = this.getUsername(msg);
        this._server.emit('chat message', `${user} left the server.`);
    }
    getUsername(msg) {
        const user = msg.content.toString();
        if (user.length === 0) {
            console.log("Unable to get content; using Anonymous as name.");
            return "Anonymous";
        }
        return user;
    }
}
exports.DisconnectReceiver = DisconnectReceiver;
//# sourceMappingURL=DisconnectReceiver.js.map