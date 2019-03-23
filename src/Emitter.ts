import {ObserverRecord} from "./TypeAliases";

export interface Emitter<IEvents extends ObserverRecord<IEvents>> {
    emit<K extends keyof IEvents>(event: K, ...args: Parameters<IEvents[K]>);
}
