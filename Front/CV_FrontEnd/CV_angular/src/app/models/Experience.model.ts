export class Experience {
    id?: number;
    rol:string;
    nombreEmpresa:string;
    descripcion:string;
    fechaInicio:string ;
    fechaFin:string ;

    constructor(rol:string,nombreEmpresa:string, descripcion:string, fechaInicio:string, fechaFin:string) {
        this.rol = rol;
        this.nombreEmpresa = nombreEmpresa;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}

