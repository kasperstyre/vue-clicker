class Powerup {
    id: number;
    name: string;
    basePrice: number;
    multiplier: number;

    constructor(id:number, name: string, basePrice: number, multiplier: number) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.multiplier = multiplier;
    }

}

export { Powerup };