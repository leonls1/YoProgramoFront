export class Skill{
    id?:number; //el "?" es para decirle que ese atributo no es necesario
    nombre: string="";
    porcentaje: number=0;
    tipo:boolean=false; //false para dura y true para blanda

    constructor(nom:string, porcentaje:number, tipo:boolean){
        this.nombre=nom;
        this.porcentaje=porcentaje;
        this.tipo=tipo;
    }
}

