import * as amqplib from "amqplib/callback_api";
import * as socketio from "socket.io";
import { Receiver } from "./Receiver";

export class DisconnectReceiver implements Receiver {
    constructor(private _server: socketio.Server) {
    }
    
    public handle(msg: amqplib.Message): void {
        const user: string = this.getUsername(msg);
        this._server.emit('chat message', `${user} left the server.`);
    }

    private getUsername(msg: amqplib.Message): string {
        const user: string = msg.content.toString();
        if (user.length === 0) {
            console.log("Unable to get content; using Anonymous as name.");
            return "Anonymous";
        }

        return user;
    }
}