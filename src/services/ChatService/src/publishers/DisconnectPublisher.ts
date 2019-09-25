import * as amqplib from "amqplib/callback_api";
import { Publisher } from "./Publisher";

export class DisconnectPublisher implements Publisher {
    constructor(private _amqp: amqplib.Channel) {
    }

    public publish(message?: any): void {
        const user: string = "Anonymous"; // haven't implemented a username system yet
        this._amqp.publish('chatservice', '', Buffer.from(user), {"headers": {"messageType": "disconnect"}});
    }
}