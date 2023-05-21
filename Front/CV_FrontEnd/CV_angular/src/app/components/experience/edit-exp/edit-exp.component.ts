import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  exp : Experience = null;

  constructor(private service:ExperienceService, private activatedRouter: ActivatedRoute, 
    private router:Router){}
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.service.detail(id).subscribe(data=>
        this.exp = data,
        error =>{
          
        });
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(this.exp, id).subscribe(
      data=> {
        this.router.navigate(['']);
      },
      error =>{
        alert("Error al modificar la experiencia")
        this.router.navigate(['']);
      }
    );
  }
}
