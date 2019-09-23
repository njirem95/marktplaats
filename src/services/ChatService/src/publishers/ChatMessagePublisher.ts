import * as amqplib from "amqplib/callback_api";
import { Publisher } from "./Publisher";

export class ChatMessagePublisher implements Publisher {
    constructor(private _amqp: amqplib.Channel) { }

    public publish(message: any) {
        this._amqp.publish('chatservice', '', Buffer.from(message));
        console.log(`Sent ${message} to RabbitMQ`);
    }
}