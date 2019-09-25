import * as amqplib from "amqplib/callback_api";
import { Publisher } from "./Publisher";
import { Dictionary } from "express-serve-static-core";

export class ChatMessagePublisher implements Publisher {
    constructor(private _amqp: amqplib.Channel) { }

    public publish(message?: any) {
        this._amqp.publish('chatservice', '', Buffer.from(message), {"headers": {"messageType": "chat message"}});
        console.log(`Sent ${message} to RabbitMQ`);
    }
}