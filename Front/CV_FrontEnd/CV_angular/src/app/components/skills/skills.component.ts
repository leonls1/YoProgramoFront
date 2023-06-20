import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SkillService  } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  listaHabilidades :Skill[] =[];
  loggedIn:boolean=false;

  constructor(private servicio: SkillService, private auth: AuthenticationService){}
  
  ngOnInit(): void {
    this.obtenerHabilidades();
  }

  obtenerHabilidades(){
    this.servicio.obtenerListaHabilidades().subscribe(dato => {this.listaHabilidades = dato;});
    this.loggedIn = this.auth.isLoggedIn();
  }

  onDelete(id:number): void{
    if (id != undefined)
    this.servicio.eliminarHabilidad(id).subscribe(() => {
      this.obtenerHabilidades();
      alert("hablidad borrada")},
      error=>
      alert("Error"));
  }

}
