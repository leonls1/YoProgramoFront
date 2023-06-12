import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

  empleado: Employee;

  constructor( private servicio: EmployeeService, private route: Router){
    this.empleado = new Employee();
  }

  registrarEmpleado(){
    this.servicio.registrarEmpelado(this.empleado).subscribe(dato=>{
      console.log(dato);
      this.irALaLista();      
      },error=>console.log(error));
  }

  irALaLista(){
    this.route.navigate(['empleados']) 
  }

  onSubmit(){
    this.registrarEmpleado();
  }
}
