import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
 
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{


  @Input() item:Item = new Item(); //aca estoy inicializand la propiedad que va a ser el item, con esto puedo despues mostrar los datos del mismo 
  //en particular
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter(); //Declarado un evento que va a tomar un Item como objeto para luego eliminarlo, el mismo evento
  // va a sser una propiedad de salida
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onDelete(item:Item){
    this.deleteItem.emit(item)
  }

  

  onToggle(item:Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item); 
  }
}
