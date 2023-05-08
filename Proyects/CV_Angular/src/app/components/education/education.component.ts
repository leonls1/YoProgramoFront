import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  edu: Education;
  educaciones : Education[] ;
  constructor(){
    this.edu= new Education();
    this.educaciones = [];
  }


}
