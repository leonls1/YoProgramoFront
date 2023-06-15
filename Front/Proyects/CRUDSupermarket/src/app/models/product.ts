export class Product {
    id ?: number;
    name : string;
    price : number;
    expirationDate : Date;
    type : number;

    constructor(name : string, price : number, expirationDate : Date, type : number){
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.type = type;
    }

}
