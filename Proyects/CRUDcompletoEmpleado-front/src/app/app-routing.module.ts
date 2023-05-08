import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  {path: 'empleados', component:EmployeeListComponent},
  {path: '', redirectTo:'empleados', pathMatch: 'full'} //el pathMatch es para indicarle que debe coincidir al 100%
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
