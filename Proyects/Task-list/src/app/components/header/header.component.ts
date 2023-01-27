import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    
  }

  title:string= 'Task List'

  toggleAddTask(){
    console.log("you've added a task")
  }

}