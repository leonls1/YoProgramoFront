import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-lista-crud',
  templateUrl: './lista-crud.component.html',
  styleUrls: ['./lista-crud.component.css']
})
export class ListaCrudComponent {
  id: number ;
  tasks: Tarea[];
  tsk: Tarea


  constructor(){
    this.id = 1 ;
    this.tasks = [];
    this.tsk = new Tarea();
    
  }

  addTask(){
    if(this.tsk.validate()){
          this.id ++; //aumentando el id de la tarea

          this.tsk.id = this.id;  //asignando el id
          this.tasks.push(this.tsk);  //agregando la tarea
          this.tsk = new Tarea(); //dejando la tarea en blanco
          console.log("Tarea añadida correctamente" );
    }
    else
      console.log("Tarea invalida");
    }

  removeTask(id:number){
    this.tasks;
    console.log("Tarea removida correctamente");
  }

  showDetails(){

  }

  submitForm(){
    
  }

}
