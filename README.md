# typed-event-emitter

### Here we have some examples of usage:

#### Simple Emitting and Observing

````ts
interface MyEvents {
    RESPONSE: (message: string, code: number) => void;
    CLICK: () => void;
}

let emitter = new TypedEventEmitter<MyEvents>();

// OK, proper parameters' type
emitter.on("RESPONSE", (message: string, code: number) => {
    console.log(`Message: ${message}, code: ${code}`);
});

// OK, proper parameters' type
emitter.emit("RESPONSE", "New response", 400);

// type error, FOO is not type of event
emitter.on("FOO", (message: string, code: number) => {
    console.log(`Message: ${message}, code: ${code}`);
});

// type error, message type is string not number
emitter.on("RESPONSE", (message: number, code: number) => {
    console.log(`Message: ${message}, code: ${code}`);
});

// type error, FOO is not type of event
emitter.emit("FOO", "New response", 400);

// type error, code type is number not string
emitter.emit("RESPONSE", "New response", "400");

````

#### Using Typed Event Emitter as a base class

````ts
interface MyModel {
    name: string;
    surname: string;
    age: number;
}

interface MyEvents {
    CLICK: (model: MyModel) => void;
}

class MyController extends TypedEventEmitter<MyEvents> {
    constructor() {
        super();
    }

    public emitEvent() {
        this.emit("CLICK", {age: 20, name: "Piotr", surname: "Burning Water"});
    }
}

interface YourEvents {
    RESPONSE: (response: number) => void;
}

class YourController extends TypedEventEmitter<YourEvents> {

    // no possibility to emit events from MyController
    constructor(private myController: Observer<MyEvents>) {
        super();
        this.myController.on("CLICK", (model: MyModel) => {
            console.log(model);
        });
    }
}

let firstController = new MyController();
new YourController(firstController);
firstController.emitEvent();
````
