interface CustomDate {
    day: number;
    month: number;
    year: number;
}

class OldDate {
    getDate(): string {
        return '01-01-2024';
    }
}

class NewDate {
    getDate(): CustomDate {
        return { day: 1, month: 1, year: 2025 }
    }
}


class NewDateWrapper extends OldDate {
    date: NewDate;

    constructor(date: NewDate) {
        super();
        this.date = date;
    }

    getDate(): string {
        const { day, month, year } = this.date.getDate();

        return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    }
}

class Application {
    run() {
        const date1 = new OldDate();
        this.schedule(date1);

        const date2 = new NewDate();
        const wrapper = new NewDateWrapper(date2);

        this.schedule(wrapper);
    }

    private schedule(date: OldDate) {
        console.log(date.getDate());
    }
}