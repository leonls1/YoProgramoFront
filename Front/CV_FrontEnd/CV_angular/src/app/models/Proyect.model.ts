export class  Proyect{
    id?:number;
    nombre:string
    link:string
    descripcion:string;
    fechaCreacion:string;
    // imagenes = string[];

    constructor(nombre: string, link : string, descripcion : string, fechaCreacion : string){
        this.nombre = nombre;
        this.link = link;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
    }
    
}