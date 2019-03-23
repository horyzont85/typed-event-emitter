import { Emitter } from "./Emitter";
import { Observer } from "./Observer";
import { EventCallback, ObserverRecord } from "./TypeAliases";
export declare class TypedEventEmitter<IEvents extends ObserverRecord<IEvents>> implements Emitter<IEvents>, Observer<IEvents> {
    private events;
    on<K extends keyof IEvents>(event: K, callback: EventCallback<IEvents, K>): void;
    emit<K extends keyof IEvents>(event: K, ...args: Parameters<IEvents[K]>): void;
}
