"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const redis = require("socket.io-redis");
const ChatServerHandler_1 = require("./network/ChatServerHandler");
const DisconnectEvent_1 = require("./events/DisconnectEvent");
const ChatMessageEvent_1 = require("./events/ChatMessageEvent");
const io = socketio.listen(1337);
io.adapter(redis({
    host: "redis",
    port: 6379,
}));
const events = new Map();
events.set("disconnect", new DisconnectEvent_1.DisconnectEvent(io));
events.set("chat message", new ChatMessageEvent_1.ChatMessageEvent(io));
const handler = new ChatServerHandler_1.ChatServerHandler(io, events);
handler.handle();
//# sourceMappingURL=server.js.map