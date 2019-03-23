export type ObserverRecord<IEvents> = Record<keyof IEvents, (...args: any[]) => any>;
export type EventCallback<IEvents extends ObserverRecord<IEvents>, K extends keyof IEvents> =
    (...args: Parameters<IEvents[K]>) => ReturnType<IEvents[K]>;
