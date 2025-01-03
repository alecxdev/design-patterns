interface Command {
    execute(): void;
    // undo(): void;
}

class InvokeCommand implements Command {
    execute(): void {
        console.log("Execution");
    }
}


class Application {
    commands: Command[] = [];

    run() {
        const savedCommandForRunning = () => {
            this.executeCommand(new InvokeCommand());
        };


        savedCommandForRunning();
    }

    executeCommand(command: Command) {
        command.execute();
        this.commands.push(command);
    }
}