import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill:Skill = null;

  constructor(private route: ActivatedRoute, private router : Router, private service : SkillService) {}
  
  
  ngOnInit(): void {
   const id:number = this.route.snapshot.params['id'];
   this.service.obtenerHabilidadPorId(id).subscribe(response=>
    this.skill = response,
    error =>{
      alert("No se ha podido cargar la habilidad");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id:number = this.route.snapshot.params['id'];
    this.service.actualizarHabilidad(id, this.skill).subscribe(response=>{
      alert("Habilidad actualizada");
      this.router.navigate(['']);
    },error=>{
      alert("No se ha podido editar la habilida");
      this.router.navigate(['']);
    })
  }


 
  
}
