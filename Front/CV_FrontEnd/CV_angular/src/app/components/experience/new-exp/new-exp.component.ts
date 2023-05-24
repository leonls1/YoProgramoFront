import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css'],
})
export class NewExpComponent {
  nombre: string = '';
  descripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  rol: string = '';

  constructor(private service: ExperienceService, private router: Router) {}

  onCreate(): void {
    const exp = new Experience(
      this.rol,
      this.nombre,
      this.descripcion,
      this.fechaInicio,
      this.fechaFin
    );
    this.service.save(exp).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (error) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }
}
