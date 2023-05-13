import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-nombres-v1',
  templateUrl: './lista-nombres-v1.component.html',
  styleUrls: ['./lista-nombres-v1.component.css']
})
export class ListaNombresV1Component {
 
  nombres : String[];

  constructor(){
    this.nombres = [];

  }

  anadirNombre(nom: string){
    this.nombres.push(nom);
    console.log("se ha añadido el nombre " + nom);
  }
}
