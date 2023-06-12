import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/models/Proyect.model';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css'],
})
export class EditProyectComponent implements OnInit {
  project: Proyect = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProyectService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.detailProyect(id).subscribe(
      (proyect) => {
        this.project = proyect;
      },
      () => {
        alert('Proyect not found');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.route.snapshot.params['id'];
    this.service.editProyect(id, this.project).subscribe(() => {
      alert('Proyect updated');
      this.router.navigate(['']);
    }, ()=> {
      alert('Error updating proyect');
      this.router.navigate(['']);
    });
  }
}
