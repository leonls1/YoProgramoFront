import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

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
  showAddTask: boolean = false;
  subscription?  : Subscription; // al instanciar esto hago que pueda escuchar al servicio en este caso que esta utilizando la 
  // variable 'showAddTask'

  constructor(
    private uiService: UiService //una vez importado un servicion tenes que crearlo con el constructor
  ) {this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddTask = value)}


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
    //autoincrement pero no puedo ahora, lo dejo estatico

    this.OnAddTask.emit(newTarea);
  }
 
 
}
