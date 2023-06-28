import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario-con-validacion',
  templateUrl: './formulario-con-validacion.component.html',
  styleUrls: ['./formulario-con-validacion.component.css']
})
export class FormularioConValidacionComponent {

  nombre = '';
  apellido = '';
  contrasenia = '';
  email = '';
  formulario = document.getElementById('MiFormulario');

  EnviarFormulario(){
    if(document.getElementById('MiFormulario')?.getAttribute('')){
        alert('es valido');
    }
    else{
      alert('no es valido');
    }
  }
}
