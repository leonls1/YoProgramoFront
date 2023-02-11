import { Component, OnInit} from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit   {
  tasks: Task[] =[]; //va dentro del constructor

  constructor(
    private taskService: TaskService //cuando se instancie el componente se crea un taskService
    ){}
  
  ngOnInit(): void{
     this.taskService.getTasks().subscribe((tasks) =>
     this.tasks=  tasks); //al iniciar se van a cargar las tareas ya que esta subscrito
    // a mi observable dentro del taskService para
  }

  deleteTask(task:Task){ //al igual que todas las tareas lo voy a aplicar desde mi servicio
    console.log("borrando una tarea en particular")
  }
}
