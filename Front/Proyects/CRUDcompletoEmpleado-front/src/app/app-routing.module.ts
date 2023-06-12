import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


const routes: Routes = [
  {path: 'empleados', component:EmployeeListComponent},
  {path: '', redirectTo:'empleados', pathMatch: 'full'}, //el pathMatch es para indicarle que debe coincidir al 100%
  {path: 'registrar-empleado', component: RegisterEmployeeComponent},
  {path: 'actualizar-empleado/:id', component: UpdateEmployeeComponent},
  {path:'detalle-empleado/:id', component: EmployeeDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
