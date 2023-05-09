import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  empleados:Employee[]; //creando una lista de empleados

  constructor(private empleadosService:EmployeeService, private router:Router ){ 
    this.empleados =  [];  
   
  }

  ngOnInit(){ //defino el onInit por tener que usar solo al inico este metodo
    this.obtenerEmpleados(); //le agrego el this porque se trata de un metodo privado

  }
  
  obtenerEmpleados(){ //entonces con esto estaria llamando al service y metiendo en mi array de arriba
    //los datos que recibo de las suscripcion
    this.empleadosService.obtenerListaEmpleados().subscribe((dato:Employee[]) => {this.empleados = dato;});
  }
 
//me lleva hacia el component de actualizar empleado
  actuliazarEmpleado(id: number){
    this.router.navigate(['/actualizar-empleado', id]);
  }

  eliminarEmpelado(id: number){
    this.empleadosService.eliminarEmpleado(id).subscribe(data => {console.log(data);
      this.obtenerEmpleados();  //lo llamo para que me quede la lista atualizada})
    })}

    detalleEmpleado(id:number){
      this.router.navigate(['detalle-empledo', id]);
    }
}