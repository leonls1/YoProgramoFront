export class Tarea{
    id:number = 0;
    nombre:String = '';
    descripcion:string = '';
    fecha:string = '';
    estado:boolean= false;

    constructor(){}

    validate(){
        return !(this.id === 0 ||
                this.nombre === '' || 
                this.descripcion === '' || 
                this.fecha === '')
    }

}

