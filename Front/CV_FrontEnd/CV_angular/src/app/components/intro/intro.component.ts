import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  nombre: String = "Leon Lederhos Sturich";
  titulo: String = "Full stack junior";
  descripcion: String = "Estudiante de ingeniria en sistemas, desarrollando proyectos fullstack y aplicaciones .net";
  editable: boolean = false;
  validar(){
    console.log("validado") 
  }

  enableEditing(){
    this.editable = true;
    console.log("editing");
  }
}
