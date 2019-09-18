import { Event } from "./Event";
import * as socketio from "socket.io";

export class DisconnectEvent implements Event {
    constructor(private _server: socketio.Server) {}

    public handle(session: socketio.Socket, data?: any): void {
        this._server.emit('chat message', `Someone left the server.`);
    }
}