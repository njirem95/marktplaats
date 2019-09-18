import * as socketio from "socket.io";
import { Event } from "../events/Event";
import { Connection } from "./Connection";

export class ChatServerHandler implements Connection {
    constructor(
        private _server: socketio.Server, 
        private _events: Map<string, Event>) { }   

    public handle(): void {
        this._server.on('connection', (session: socketio.Socket) => {
            console.log(`Handling incoming connection for ${session.handshake.address}`);

            this._events.forEach(function (event: Event, value: string) {
                session.on(value, function(data) {
                    event.handle(session, data);
                });
            });
        });
    }
}