import * as amqplib from "amqplib";

export interface Receiver {
    handle(msg: amqplib.Message): void;
}