import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/Proyect.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  proyectList: Proyect[] = [];
  loggedIn:boolean=false;

  constructor(private service: ProyectService, private auth:AuthenticationService) {}

  ngOnInit(): void { this.bringProyects();}

  bringProyects() {
    this.service
      .getProyects()
      .subscribe((response) => (this.proyectList = response));
    this.loggedIn = this.auth.isLoggedIn();
  }

  onDelete(id: number): void{
    this.service.deleteProyect(id).subscribe( () =>{
      this.bringProyects();  
      alert("proyecto eliminado")
    }, () =>{ 
      alert("no se a podido elminar el proyecto")})
  }
}

