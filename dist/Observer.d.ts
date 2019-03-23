import { EventCallback, ObserverRecord } from "./TypeAliases";
export interface Observer<IEvents extends ObserverRecord<IEvents>> {
    on<K extends keyof IEvents>(event: K, callback: EventCallback<IEvents, K>): any;
}
