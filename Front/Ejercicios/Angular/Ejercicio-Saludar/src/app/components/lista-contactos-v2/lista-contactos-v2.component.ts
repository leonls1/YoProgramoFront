import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-contactos-v2',
  templateUrl: './lista-contactos-v2.component.html',
  styleUrls: ['./lista-contactos-v2.component.css']
})
export class ListaContactosV2Component {
  
    personas : Persona[] 
    per:Persona;

    constructor(){
      this.personas = [];
      this.per = new Persona();
    }
  
    aniadirPersona(){
      if(this.per.esValido()){
        this.personas.push(this.per);
        this.per = new Persona(); //si no estuviera esta instruccion cada vez que edito algo todos los contactos se cambiarian ya que serian uno solo
        console.log("persona valida, se ha añadido correctamente")
      }
      else 
        console.log("persona invalida")
    }
  
    isEmpty(){
      return this.personas.length===0;
    }
  
  
}
