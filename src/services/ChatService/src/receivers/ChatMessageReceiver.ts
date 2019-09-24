import * as socketio from "socket.io";
import { Receiver } from "./Receiver";
import * as amqplib from "amqplib";

export class ChatMessageReceiver implements Receiver {
    constructor(private _server: socketio.Server) {}
    
    public handle(msg: amqplib.Message): void {
        const content: string = msg.content.toString();

        this._server.emit('chat message', content);
    }
}