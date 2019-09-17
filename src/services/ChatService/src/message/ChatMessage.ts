import { MessageHandler } from "./Message";
import * as socketio from "socket.io";

export class ChatMessageHandler implements MessageHandler {
    public handle(data?: any): void {
        console.log(data);
    }
}