import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //url listado de empleados en el back
  private baseUrl ='http://localhost:8080/api/v1/empleados'; //se trata de la url que me devuelve el back
  //donde se encontraran los datos en este caso de los empleados en formato JSON,
  //nada menos que el endPoint que genero con el controller

  private crearUrl = 'http://localhost:8080/api/v1/crear'; //para cuando tenga que crear un empleado

  constructor(private httpClient:HttpClient) { }

  //con este metodos obtenemos los empleados
  obtenerListaEmpleados():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);  }

  registrarEmpelado(empleado: Employee): Observable<Object>{ //recibo por parametro a un empleado, lo que estoy observando en este caso sera un objto
    return this.httpClient.post(`${this.crearUrl}`, empleado) //fijate tambiem que cambia la url, 
    //estoy usando un post y ademas pasandole un empleado por parametro
  }
}
