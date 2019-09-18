"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageEvent {
    handle(session, data) {
        // Validate data
        if (data.length == 0) {
            console.log("invalid message");
            return;
        }
        console.log(data);
    }
}
exports.ChatMessageEvent = ChatMessageEvent;
//# sourceMappingURL=ChatMessageEvent.js.map