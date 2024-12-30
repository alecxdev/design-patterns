class House {
    doors: number;
    windows: number;

    constructor(doors: number = 0, windows: number = 0)  {
        this.doors = doors;
        this.windows = windows;
    }
}

class HouseBuilder {
    private house: House = new House();

    setDoors(doors: number) {
        this.house.doors = doors;

        return this;
    }

    setWindows(windows: number) {
        this.house.windows = windows;

        return this;
    }

    build() {
       /* 
        * // For creating new instance every build
        * const house = this.house;
        * this.house = new House();
        *
        * return house;
        */

       return this.house;
    }
}