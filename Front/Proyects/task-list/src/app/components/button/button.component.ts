import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {


  @Input() text: string =""; //creo estos inputs para que puedan ingresar desde afuera el colo y texto que quiero para mi boton
  @Input() color: string ="";
  @Output() btnClick= new EventEmitter(); //creo este output para que pueda afectar al destino 

  onClick() {
    this.btnClick.emit(); //utiliza el output de este componente
  
  }

}
