import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { Tasks } from '../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task = Tasks[0];
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter(); 

  faTimes= faTimes;

  onDelete(task:Task){  //este metodo recibe una tarea por paramatro para operarla
    this.onDeleteTask.emit(task); //con el emit le aviso al componente padre (task) que actue y haga la funcion onDeleteTask
  }
}
