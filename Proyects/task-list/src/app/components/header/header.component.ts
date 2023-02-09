import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title : string = 'Task-list ';

  toggleAddTask(){
    console.log("usaste la funcion del header")
  }

}
