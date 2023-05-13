export class Persona {

    nombre : string='';
    apellido : string='';
    password : string='';
    edad : number= 0 ;
  
    constructor() {

    }
    

  
    esValido(){
      if( this.nombre === ''  ||
          this.apellido === ''||
          this.edad === 0 ||
          this.password === ''){
        return false; //para validar que ingrese los valores y no este por defecto
      }
      else
        return true;
    }
  
    mostrarInfo(){
      return 'Edad: ' + this.edad ;
    }
  
    nombreCompleto(){
      return this.nombre+ ' ' + this.apellido;
    }
  
  
  }