interface IteratorInterface<T> {
    hasMore(): boolean;
    getNext(): T | null;
}

class Looper<T> implements IteratorInterface<T> {
    cache: Record<number, T> = {}
    index: number = 0;
    limit: number = 0;

    add(element: T) {
        this.cache[this.index++] = element;
    }

    hasMore() {
        return this.limit < this.index;
    }

    getNext() {
        if (!this.hasMore()) {
            return null;
        }

        const element = this.cache[this.limit];
        delete this.cache[this.limit];
        this.limit++;

        return element;
    }
}