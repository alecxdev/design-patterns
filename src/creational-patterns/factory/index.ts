interface Button {
    render(): void;
}

class WebButton implements Button {
    render(): void {
        // web implementation
    }
}
class DesktopButton implements Button {
    render(): void {
        // desktop implementation
    }
}

abstract class Dialog {
    abstract createButton(): Button;

    render() {
        const button = this.createButton();
        button.render();
    }
}

class WebDialog extends Dialog {
    createButton() {
        return new WebButton();
    }
}

class DesktopDialog extends Dialog {
    createButton() {
        return new DesktopButton();
    }
}

class App {
    dialog: Dialog;
    constructor(type: 'web' | 'desktop') {
        if (type === 'desktop') {
            this.dialog = new DesktopDialog();
        }

        if (type === 'web') {
            this.dialog = new WebDialog();
        }

        this.dialog.render()
    }
}