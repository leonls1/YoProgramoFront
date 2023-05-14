import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

   persona:Persona = new Persona("","","","");

  descripcion: String = "Estudiante de ingeniria en sistemas, desarrollando proyectos fullstack y aplicaciones .net";
  editable: boolean = false;
  validar(){
    console.log("validado") 
  }

  constructor(private perServico:PersonaService){
  }

  ngOnInit(): void {
    this.perServico.getUsuarioPpal().subscribe(data => this.persona = data);
  }

  enableEditing(){
    this.editable = true;
    console.log("editing");
  }
}
