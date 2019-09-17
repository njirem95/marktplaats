"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const ServerHandler_1 = require("./network/ServerHandler");
const OnDisconnect_1 = require("./message/OnDisconnect");
const ChatMessage_1 = require("./message/ChatMessage");
const io = socketio.listen(1337);
const messages = new Map();
messages.set("disconnect", new OnDisconnect_1.OnDisconnectHandler);
messages.set("chat message", new ChatMessage_1.ChatMessageHandler);
const handler = new ServerHandler_1.ChatServerHandler(io, messages);
handler.handle();
//# sourceMappingURL=server.js.map