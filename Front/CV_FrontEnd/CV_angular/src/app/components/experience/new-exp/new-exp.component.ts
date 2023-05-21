import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit{

  nombre:string = "";
  descripcion:string = "";
  fechaInicio:string = "";
  fechaFin:string = "";
  rol:string = "";
  
  ngOnInit(): void {
    
  }

  constructor(private service: ExperienceService, private router: Router){

  }

  onCreate():void{
    const exp= new Experience(this.rol,this.nombre,this.descripcion,this.fechaInicio, this.fechaFin);
    this.service.save(exp).subscribe(data=> {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },
      errro =>{
        alert("Fallo");
        this.router.navigate(['']);
      })
    ;
  }
}

