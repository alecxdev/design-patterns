abstract class Template {
    run() {
        this.initialize();
        this.step1();
        this.step2();
        this.step3();
    }
    
    private initialize() {
        console.log("Initializing...");
    }

    step1() {
        console.log("step 1");
    }

    abstract step2(): void;

    step3() {
        // only if need to override
    }
}

class Application extends Template {
    step2(): void {
        console.log("Step 2 from overriding method");
    }
}

// const app = new Application();
// app.run();