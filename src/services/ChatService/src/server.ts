import * as socketio from "socket.io";
import * as redis from "socket.io-redis";
import { ChatServerHandler } from "./network/ChatServerHandler";
import { DisconnectEvent } from "./events/DisconnectEvent";
import { ChatMessageEvent } from "./events/ChatMessageEvent";
import { Event } from "./events/Event";
import { Connection } from "./network/Connection";

const io: socketio.Server = socketio.listen(1337);
io.adapter(redis({
    host: "redis",
    port: 6379,
}));

const events: Map<string, Event> = new Map<string, Event>();
events.set("disconnect", new DisconnectEvent(io));
events.set("chat message", new ChatMessageEvent(io));

const handler: Connection = new ChatServerHandler(io, events);

handler.handle();