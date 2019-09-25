import * as amqplib from "amqplib/callback_api";
import { Receiver } from "./Receiver";
import { ChatMessageReceiver } from "./ChatMessageReceiver";

export class MessageHandler {
    constructor(private _receivers: Map<String, Receiver>) {
    }

    public handle(message: amqplib.Message): void {
        const messageType: string = this.getMessageType(message);

        if (!this.hasMessageReceiver(messageType)) {
            console.log('Unable to find message receiver');
            return;
        }

        console.log(`Handling message with type ${messageType}`);

        const receiver: Receiver = this.getMessageReceiver(messageType);

        receiver.handle(message);
    }


    private hasMessageReceiver(messageType: string): boolean {
        return this._receivers.has(messageType);        
    }

    private getMessageReceiver(messageType: string): Receiver {
        return this._receivers.get(messageType);
    }

    private getMessageType(message: amqplib.Message): string {
        const type: string = message.properties.headers['messageType'];
        if (type.length === 0) {
            throw new Error('Invalid type');
        }

        return type;
    }
}