export interface MessageHandler {
    handle(data?: any): void;
}