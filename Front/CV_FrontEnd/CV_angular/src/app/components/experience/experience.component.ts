import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencias: Experience[] = [];

  constructor(private service: ExperienceService){}
  
  ngOnInit(): void {
   this.cargarExperience();
  }


  cargarExperience():void{
    this.service.traerExperiencias().subscribe(data=>this.experiencias = data); 
  }

  onEdit():void{}

  onDelete(id?:number):void{
    if (id != undefined) //validando primero que exista esa experiencia en la base de datos
    this.service.delete(id).subscribe(data=> {
      this.cargarExperience();
      alert("Educacion borrada")
    },error => alert("no se ha podido borrar la experiencia")
    )
  }
}
