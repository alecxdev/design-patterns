interface ISubscriber {
    notify(data: unknown): void;
}

class Subscriber implements ISubscriber {
    notify(data: unknown) {
        console.log(data);
    }
}

class Observer {
    obsverbables: ISubscriber[];

    constructor() {
        this.obsverbables = []
    }

    add(data: ISubscriber): void {
        this.obsverbables.push(data);
    }

    send(data: string) {
        this.obsverbables.forEach(obsverbable => obsverbable.notify(data));
    }
}

const observer = new Observer();
const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();

observer.add(subscriber1);
observer.add(subscriber2);

observer.send("data");
