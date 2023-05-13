import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id:number;
  empleado:Employee;

  constructor(private servicio: EmployeeService, private router:Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Employee();
    this.servicio.obtenerEmpleadoPorId(this.id).subscribe(data => {
      this.empleado = data;
    })
  }
}
