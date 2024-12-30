class Robot {
    public type: string;
    public components: string[];

    public clone(): this {
        /**
         * // copying all attributes
         * 
         * const clone = Object.create(this);
         * clone.components = [...this.components];
         * 
         * return clone;
         */

        return structuredClone(this);
    }
}