export class Persona{
    id?:number;
    nombre:String;
    apellido:String;
    descripcion:String;
    titulo:String;

    constructor(nom:string,ape:String, desc:String,titulo:String){
        this.nombre = nom;
        this.apellido = ape;
        this.descripcion = desc;
        this.titulo = titulo;
    }
}