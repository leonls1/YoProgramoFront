import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { EducationService } from 'src/app/service/education.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educaciones : Education[] =[];
  loggedIn: boolean = false;

  constructor( private service: EducationService, private auth:AuthenticationService){}
  
  
  ngOnInit(): void {
    this.traerEducaciones();
  }
  

  traerEducaciones():void{
    this.service.bringEducations().subscribe(response =>
      this.educaciones = response)
    this.loggedIn = this.auth.isLoggedIn();
  }

  onDelete(id?:number):void{
    if (id != undefined)
    this.service.deleteEducation(id).subscribe(response =>{
      this.traerEducaciones();
    },error => alert("No se ha podido borrar la educacion"))
  }
}




