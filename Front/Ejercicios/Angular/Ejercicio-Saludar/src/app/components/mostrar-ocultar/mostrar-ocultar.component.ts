import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-ocultar',
  templateUrl: './mostrar-ocultar.component.html',
  styleUrls: ['./mostrar-ocultar.component.css']
})
export class MostrarOcultarComponent {
  mensaje: string = 'Hola, me estas mostrando';
  mostrar: boolean= false;
  mensaje_enlace: string = 'Mostrar';

  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar = this.mostrar = false;
      this.mensaje_enlace = 'Mostrar';
    }
    else{
      this.mostrar = true;
      this.mensaje_enlace = 'Ocultar';
    }
  }


}
