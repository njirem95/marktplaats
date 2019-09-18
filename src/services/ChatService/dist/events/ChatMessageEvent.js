"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageEvent {
    constructor(_socket) {
        this._socket = _socket;
    }
    handle(session, data) {
        // TODO Validate data
        // TODO Pass to an outbound handler instead of emitting directly using _socket.
        this._socket.emit('chat message', data);
    }
}
exports.ChatMessageEvent = ChatMessageEvent;
//# sourceMappingURL=ChatMessageEvent.js.map