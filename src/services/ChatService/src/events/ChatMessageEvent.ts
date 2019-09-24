import { Event } from "./Event";
import * as socketio from "socket.io";
import { Publisher } from "../publishers/Publisher";

export class ChatMessageEvent implements Event {
    constructor(private _publisher: Publisher) { }

    /**
     * Handles the incoming chat message.
     *
     * It also checks if data is a chat command instead of a regular
     * chat message.  
     *  
     * @param session
     * @param data 
     */
    public handle(session: socketio.Socket, data?: any): void {
        if (data.length == 0) return;

        if (this.isChatCommand(data)) {
            session.emit('chat message', 'unrecognized command');
            return;
        }

        this._publisher.publish(data);
    }

    /**
     * Checks if message is a chat command.
     * 
     * message is a chat command if it  with a "!".
     * 
     * @param message the incoming message
     */
    private isChatCommand(message: string): boolean {
        return message.startsWith("!");
    }
}