import {Emitter} from "./Emitter";
import {Observer} from "./Observer";
import {EventCallback, ObserverRecord} from "./TypeAliases";

export class TypedEventEmitter<IEvents extends ObserverRecord<IEvents>>
    implements Emitter<IEvents>, Observer<IEvents> {
    private events: Map<keyof IEvents, Set<(...args: any[]) => any>> = new Map();

    public on<K extends keyof IEvents>(event: K, callback: EventCallback<IEvents, K>) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(callback);
    }

    public emit<K extends keyof IEvents>(event: K, ...args: Parameters<IEvents[K]>) {
        if (this.events.has(event)) {
            this.events.get(event).forEach((callback) => {
                callback(args);
            });
        }
    }
}
