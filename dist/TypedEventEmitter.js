"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypedEventEmitter = (function () {
    function TypedEventEmitter() {
        this.events = new Map();
    }
    TypedEventEmitter.prototype.on = function (event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(callback);
    };
    TypedEventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.events.has(event)) {
            this.events.get(event).forEach(function (callback) {
                callback(args);
            });
        }
    };
    return TypedEventEmitter;
}());
exports.TypedEventEmitter = TypedEventEmitter;
//# sourceMappingURL=TypedEventEmitter.js.map