import * as socketio from "socket.io";
import { ServerHandler, ChatServerHandler } from "./network/ServerHandler";
import { OnDisconnectHandler } from "./message/OnDisconnect";
import { ChatMessageHandler } from "./message/ChatMessage";
import { MessageHandler } from "./message/Message";

const io: socketio.Server = socketio.listen(1337);

const messages: Map<string, MessageHandler> = new Map<string, MessageHandler>();
messages.set("disconnect", new OnDisconnectHandler);
messages.set("chat message", new ChatMessageHandler);

const handler: ServerHandler = new ChatServerHandler(io, messages);

handler.handle();