import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  empleado: Employee;
  id: number;
  //el activatedRoute se refire a la url actual, con ella puedo obtener el id presente que se cargo una
  //vez clickee el boton de actualizar
  constructor(
    private servicio: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.empleado = new Employee(); //para que no llore por estar vacio

    this.id = route.snapshot.params['id']; // asi es que puedo recibir el id que me envia desde desde el
    //el template anterior

    this.servicio.obtenerEmpleadoPorId(this.id).subscribe(
      (dato) => {
        this.empleado = dato; //cargando el empleado con el id recibido
      },
      (error) => console.log(error)
    ); // sino encuentra al empleado carga entonces el error correspondiente
  }

  irListaEmpleados() {
    //para redirigirme y ver todos los empleados
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    // luego de actualizarlo me redirige a la lista ppal con los empleados
    this.servicio.actualizarEmpleado(this.id, this.empleado).subscribe(
      (dato) => {
        this.irListaEmpleados();
      },
      (error) => console.log(error)
    );
  }
}
