import { Event } from "./Event";
import * as socketio from "socket.io";

export class ChatMessageEvent implements Event {
    constructor(private _socket: socketio.Server) { }

    public handle(session: socketio.Socket, data?: any): void {
        // TODO Validate data

        // TODO Pass to an outbound handler instead of emitting directly using _socket.
        this._socket.emit('chat message', data);
    }
}