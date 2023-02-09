import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { Tasks } from '../mock-task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task = Tasks[0];

}
