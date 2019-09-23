"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageEvent {
    constructor(_publisher) {
        this._publisher = _publisher;
    }
    /**
     * Handles the incoming chat message.
     *
     * It also checks if data is a chat command instead of a regular
     * chat message.
     *
     * @param session
     * @param data
     */
    handle(session, data) {
        // TODO Validate data properly.
        if (data.length == 0)
            return;
        if (this.isChatCommand(data)) {
            session.emit('chat message', 'unrecognized command');
            return;
        }
        // TODO Pass to an outbound handler instead of emitting directly using _socket.
        this._publisher.publish(data);
    }
    /**
     * Checks if message is a chat command.
     *
     * message is a chat command if it  with a "!".
     *
     * @param message the incoming message
     */
    isChatCommand(message) {
        return message.startsWith("!");
    }
}
exports.ChatMessageEvent = ChatMessageEvent;
//# sourceMappingURL=ChatMessageEvent.js.map