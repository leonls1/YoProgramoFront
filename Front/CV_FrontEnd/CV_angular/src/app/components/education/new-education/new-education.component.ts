import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/Education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent {
  place: string = '';
  dateBegining: string = '';
  dateEnd: string = '';
  tittle: string = '';
  description: string = '';

  constructor(private router: Router, private service: EducationService) {}

  onCreate() {
    const edu = new Education(
      this.tittle,
      this.description,
      this.dateBegining,
      this.dateEnd,
      this.place
    );
    this.service.saveEducation(edu).subscribe(
      (response) => {
        alert('Educacion añadida');
        this.router.navigate(['']);
      },
      (error) => {
        alert('fallo al agregar la educacion');
        this.router.navigate(['']);
      }
    );
  }
}
