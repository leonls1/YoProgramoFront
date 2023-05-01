export class Tarea{
    id:number = 0;
    nombre:String = '';
    descripcion:string = '';
    fecha:String = '';
    estado:boolean= false;

    constructor(){}

    validate(){
        return !(this.nombre === '' || 
                 this.descripcion === '' ||
                 this.fecha ==='')
    }

}

