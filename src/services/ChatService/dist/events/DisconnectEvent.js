"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectEvent {
    constructor(_disconnectPubliseher) {
        this._disconnectPubliseher = _disconnectPubliseher;
    }
    handle(session, data) {
        this._disconnectPubliseher.publish(data);
    }
}
exports.DisconnectEvent = DisconnectEvent;
//# sourceMappingURL=DisconnectEvent.js.map