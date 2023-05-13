import { Component } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { SkillService  } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  listaHabilidades :Skill[];


  constructor(private servicio: SkillService){
    this.listaHabilidades =[]
  }

  ngOninit(){
    this.obtenerHabilidades();
  }

  obtenerHabilidades(){
    this.servicio.obtenerListaHabilidades().subscribe((dato:Skill[]) => {this.listaHabilidades = dato;});
    
  }
}
