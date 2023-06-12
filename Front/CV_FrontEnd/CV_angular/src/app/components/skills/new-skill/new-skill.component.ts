import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent {
  nombre: string = '';
  porcentaje: number = 0;
  tipo: boolean = false;

  constructor(private service: SkillService, private router: Router) {}

  onCreate(): void {
    const skill = new Skill(
        this.nombre, 
        this.porcentaje, 
        this.tipo);
    
    this.service.registrarHabilidad(skill).subscribe(
      (response) => {
        alert('Se ha creado la habilidad correctamente');
        this.router.navigate(['']);
      },
      (error) => {
        alert('No se ha podido crear la hablidad');
        this.router.navigate(['']);
      }
    );
  }
}
