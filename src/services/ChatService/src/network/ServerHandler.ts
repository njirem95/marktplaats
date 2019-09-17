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
        const messages: Map<string, MessageHandler> = this._messages; // why?

        this._server.on('connection', function(session: socketio.Socket) {
            console.log("Handling incoming connection...");

            messages.forEach(function (messageHandler: MessageHandler, value: string) {
                session.on(value, function(data) {
                    return messageHandler.handle(data);
                });
            });
        });
    }
}