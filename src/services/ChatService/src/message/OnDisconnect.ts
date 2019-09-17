import { MessageHandler } from "./Message";

export class OnDisconnectHandler implements MessageHandler {
    public handle(data?: any): void {
        console.log("Goodbye.");
    }
}