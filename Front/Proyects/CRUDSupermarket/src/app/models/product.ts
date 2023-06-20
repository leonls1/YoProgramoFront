export class Product {
    id : number =0;
    name : string;
    price : number;
   // expirationDate : Date;
    type : number;

    constructor(name : string, price : number,  type : number){
        this.name = name;
        this.price = price;
        //this.expirationDate = expirationDate;
        this.type = type;
    }

}
