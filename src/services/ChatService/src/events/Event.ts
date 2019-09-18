import * as socketio from "socket.io";

export interface Event {
    handle(session: socketio.Socket,  data?: any): void;
}