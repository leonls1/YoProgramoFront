import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task-v2.0',
  templateUrl: './add-task-v2.0.component.html',
  styleUrls: ['./add-task-v2.0.component.css']
})
export class AddTaskV20Component {
  @Output() OnAddTask: EventEmitter<Task>= new EventEmitter();

  text: string ="";
  day: string = "";
  reminder: boolean=false;
  constructor() {}


  onSubmit(){
    //validaciones
    if(this.text.length===0){
      alert("Please add some a task") 
      return
    }

    const newTarea: Task ={
      id:10,
      text: this.text,
      day: this.day,
      reminder : this.reminder
    }

    const {text, day,reminder} = this
    const newTask = {text, day, reminder}// no me funciona asi porque no se de donde sacar el id para meterlo, seria como
    //autoincrement pero no puedo arora, lo dejo estatico

    this.OnAddTask.emit(newTarea);
  }
 
 
}
