interface Remote {
    setVolume(volume: number): void;
    getVolume(): number;
}

interface Device {
    acceptVolume(): void;
}

class NewDevice implements Device {
    private remote: Remote;

    constructor(remote: Remote) {
        this.remote = remote;
    }
    
    acceptVolume(): void {
        this.remote.setVolume(1);
    }
}

class NewRemote implements Remote {
    private volume: number = 0;

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}


class Application {
    run() {
        const rmeote = new NewRemote();
        const device = new NewDevice(rmeote);

        device.acceptVolume();
    }
}