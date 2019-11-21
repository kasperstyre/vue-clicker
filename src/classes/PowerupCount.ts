class PowerupCount {
    id: number;
    count: number;
    cookiesPerSecond: number;

    constructor(id: number, count: number, cookiesPerSecond: number) {
        this.id = id;
        this.count = count;
        this.cookiesPerSecond = cookiesPerSecond;
    }
}

export { PowerupCount };