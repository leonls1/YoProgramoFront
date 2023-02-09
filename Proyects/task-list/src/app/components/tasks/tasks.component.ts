import { Component} from '@angular/core';
import { Task } from '../Task';
import { Tasks } from '../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent  {
  tasks: Task[] = Tasks; //va dentro del constructor
}
