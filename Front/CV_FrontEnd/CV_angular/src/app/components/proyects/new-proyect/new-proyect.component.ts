import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/Proyect.model';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent {
  nombre: string = "";
  fechaCreacion: string = "";
  descripcion: string = "";
  url: string = "";

  constructor(private service: ProyectService, private router: Router){}

  onCreate(){
    let project :Proyect = new Proyect(this.nombre, this.url, this.descripcion, this.fechaCreacion );
    this.service.saveProyect(project).subscribe (() =>{
      alert("Proyect successfully created");
      this.router.navigate([''])
    }, () =>{
      alert("Error occured while creating proyect");
      this.router.navigate(['']);
    })
    
  }
}
