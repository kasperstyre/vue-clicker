class Powerup {
    id: number;
    name: string;
    basePrice: number;
    multiplier: number;
    cookiesPerSecond: number;

    constructor(id:number, name: string, basePrice: number, multiplier: number, cookiesPerSecond: number) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.multiplier = multiplier;
        this.cookiesPerSecond = cookiesPerSecond;
    }

}

export { Powerup };