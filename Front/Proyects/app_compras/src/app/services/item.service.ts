import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items:Item[] =     [
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
  ]; // array que va a tener los items mostrados, tiene que declararse afuera de un metodo
  getItems() {

    return this.items;
  }
  
  addItem(item:Item){
    this.items.unshift(item);
  }
}
