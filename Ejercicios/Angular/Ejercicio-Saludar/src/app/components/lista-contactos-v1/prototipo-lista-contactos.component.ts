import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-prototipo-lista-contactos',
  templateUrl: './prototipo-lista-contactos.component.html',
  styleUrls: ['./prototipo-lista-contactos.component.css']
})
export class PrototipoListaContactosComponent {
  personas : Persona[] 
  per:Persona;

  constructor(){
    this.personas = [];
    this.per = new Persona();
  }

  aniadirPersona(){
    if(this.per.esValido()){
      this.personas.push(this.per);

      console.log("persona valida, se ha añadido correctamente")
    }
    else 
      console.log("persona invalida")
  }

  isEmpty(){
    return this.personas.length===0;
  }

}


