import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() color: string ="";
  @Input()  texto: string = "";
  @Input() icon: string = "";
  @Input() estado: boolean = true;
  @Output() btnClick =new EventEmitter();
  
  onClick(){
      this.btnClick.emit(); //para poder avisarle a contenedor que haga alguna accion
  }
  
}
