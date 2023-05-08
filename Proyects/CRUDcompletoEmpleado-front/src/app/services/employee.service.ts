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

  constructor(private httpClient:HttpClient) { }

  //con este metodos obtenemos los empleados
  obtenerListaEmpleados():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);  }

}
