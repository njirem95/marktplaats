import { Event } from "./Event";
import * as socketio from "socket.io";
import { Publisher } from "../publishers/Publisher";

export class DisconnectEvent implements Event {
    constructor(private _disconnectPubliseher: Publisher) {
    }

    public handle(session: socketio.Socket, data?: any): void {
        this._disconnectPubliseher.publish(data);
    }
}