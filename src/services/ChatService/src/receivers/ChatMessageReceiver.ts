import * as socketio from "socket.io";
import { Receiver } from "./Receiver";
import * as amqplib from "amqplib";

export class ChatMessageReceiver implements Receiver {
    constructor(private _server: socketio.Server) {}
    
    public handle(msg: amqplib.Message): void {
        // Push the incoming message to the receiving socket server.
        console.log(`Got message: ${msg.content}`);
        console.log(this._server);
    }
}