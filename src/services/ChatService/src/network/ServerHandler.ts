import * as socketio from "socket.io";
import { MessageHandler } from "../message/Message";

export interface ServerHandler {
    handle(): void;
}

export class ChatServerHandler implements ServerHandler {
    constructor(
        private _server: socketio.Server, 
        private _messages: Map<string, MessageHandler>) { }   

    public handle(): void {
        this._server.on('connection', (session: socketio.Socket) => {
            console.log("Handling incoming connection...");

            this._messages.forEach(function (message: MessageHandler, value: string) {
                session.on(value, function(data) {
                    return message.handle(data);
                });
            });
        });
    }
}