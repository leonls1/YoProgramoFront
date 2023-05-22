import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExpComponent } from './components/experience/new-exp/new-exp.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'nuevaExperiencia', component:NewExpComponent},
  {path:'editarExperiencia/:id', component:EditExpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
