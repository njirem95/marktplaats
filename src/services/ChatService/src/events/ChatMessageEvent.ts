import { Event } from "./Event";
import * as socketio from "socket.io";

export class ChatMessageEvent implements Event {
    constructor(private _socket: socketio.Server) { }

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
        // TODO Validate data properly.
        if (data.length == 0) return;

        if (this.isChatCommand(data)) {
            // TODO Handle chat command.
            return;
        }

        // TODO Pass to an outbound handler instead of emitting directly using _socket.
        this._socket.emit('chat message', data);
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