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
    //console.log("borrando una tarea en particular")
    this.taskService.deleteTask(task)
      .subscribe(
        ()=>( //llamo al servicio ya que es el quien se encarga de los datos y su manejo
        this.tasks = this.tasks.filter( (t) => {
          return  t.id !== task.id
          })
        )) //estoy filtrando entonces el las tareas para sacar esa con el id borrado
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder //cambia el estado de reminder y por eso aplica o no la clase css
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    console.log(task)
    this.taskService.addTask(task).subscribe(task =>{
      this.tasks.push(task);
    });

  }
}
