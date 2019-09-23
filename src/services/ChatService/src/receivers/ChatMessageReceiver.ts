import { Receiver } from "./Receiver";

export class ChatMessageReceiver implements Receiver {
    public handle(): void {
        // Push the incoming message to the receiving socket server.
    }
}