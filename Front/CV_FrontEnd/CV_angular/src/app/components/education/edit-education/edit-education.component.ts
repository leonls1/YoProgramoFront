import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/Education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  edu: Education = null;

  constructor(
    private router: Router,
    private service: EducationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.service.detailEducation(id).subscribe(response =>
      this.edu = response,
      error =>{
        alert("Error al editar la educacion"),
        this.router.navigate(['']);
      });
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.service.editEducation(this.edu, id).subscribe(response =>{
      alert("Educacion editada");
      this.router.navigate(['']);
    }, error =>
    { alert("Error al editar la educacion");
      this.router.navigate(['']);
    })
  }
}
