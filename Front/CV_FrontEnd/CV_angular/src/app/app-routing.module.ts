import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExpComponent } from './components/experience/new-exp/new-exp.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';

const routes: Routes = [
  {path: '', component:HomeComponent},  
  {path:'login', component:LoginComponent},
  {path:'nuevaExperiencia', component:NewExpComponent},
  {path:'editarExperiencia/:id', component:EditExpComponent},
  {path:'nuevaEducacion', component:NewEducationComponent},
  {path:'editarEducacion/:id', component:EditEducationComponent},
  {path:'nuevoSkill', component:NewSkillComponent},
  {path:'editarSkill/:id', component:EditSkillComponent},
  {path:'editarProyecto/:id', component: EditProyectComponent},
  {path:'nuevoProyecto', component: NewProyectComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
