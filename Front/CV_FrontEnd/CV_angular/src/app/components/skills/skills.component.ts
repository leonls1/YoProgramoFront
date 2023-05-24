import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService  } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  listaHabilidades :Skill[] =[];

  constructor(private servicio: SkillService){
  }
  ngOnInit(): void {
    this.obtenerHabilidades();
  }

  obtenerHabilidades(){
    this.servicio.obtenerListaHabilidades().subscribe(dato => {this.listaHabilidades = dato;});
    
  }

  onDelete(id:number): void{
    if (id != undefined)
    this.servicio.eliminarHabilidad(id).subscribe(data => {
      this.obtenerHabilidades();
      alert("hablidad borrada")},
      error=>
      alert("Error"));
  }

}
