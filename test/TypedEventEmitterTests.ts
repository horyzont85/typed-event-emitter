import {TypedEventEmitter} from "../src/TypedEventEmitter";

interface IEvents {
    CLICK: (name: string, age: number) => void;
    HOVER: () => void;
}

describe("Typed Event Emitter Tests", () => {
    const callbackMock1 = jest.fn();
    const callbackMock2 = jest.fn();
    const callbackMock3 = jest.fn();
    const eventName1 = "CLICK";
    const eventName2 = "HOVER";
    const argument1 = "Test";
    const argument2 = 5;

    it("should subscribe properly on two different type of events", () => {
        let args = [argument1, argument2];
        let typedEventEmitter = new TypedEventEmitter<IEvents>();
        typedEventEmitter.on(eventName1, callbackMock1);
        typedEventEmitter.on(eventName1, callbackMock2);
        typedEventEmitter.on(eventName2, callbackMock3);
        typedEventEmitter.emit(eventName1, argument1, argument2);
        typedEventEmitter.emit(eventName2);

        expect(callbackMock1).toBeCalledWith(args);
        expect(callbackMock2).toBeCalledWith(args);
        expect(callbackMock3).toBeCalledWith([]);
    });
});
