import { Component,OnInit } from '@angular/core';
import {Item} from '../../models/item'; //hago referencia a la clase que creee que cree en la carpeta models, es ahi donde defini
//la clase que "Item" que estoy utilizando abajo

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = []; //inicializada con un arreglo vacio
  total: number = 0; 
  
  constructor(){}

  ngOnInit(): void {
    this.items = [
      {
        id:1,
        title:'Banana',
        price: 150,
        quantity: 2,
        completed: true
      },
      {
        id:2,
        title:'Manzana',
        price: 350,
        quantity: 1,
        completed: false
      }
    ]

    this.getTotal();
  }

  deleteItem(item: Item){
    this.items = this.items.filter( x => x.id !=  item.id); //devuelve todos los elementos cuyo id sea diferenete de ese item

    this.getTotal();
  }
  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items.filter( item => !item.completed) //me devuelve los que no esten marcados como completos
                            .map( item => item.quantity* item.price)
                            .reduce( (acc, item) => acc += item,0);

  }
}
