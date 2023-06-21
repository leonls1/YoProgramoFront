import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService{

  private baseURL='https://backendlls.onrender.com/CV/V1/habilidades'
  private crearURL=this.baseURL + '/crear';
  private buscarURL=this.baseURL +'/buscar';
  private editarURL=this.baseURL +'/actualizar';
  private borrar=this.baseURL + '/borrar';

  constructor(private httpClient:HttpClient) { }

  obtenerListaHabilidades():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.baseURL}`);
  }

  registrarHabilidad(empleado: Skill): Observable<Object>{ //recibo por parametro a un empleado, lo que estoy observando en este caso sera un objto
    return this.httpClient.post(`${this.crearURL}`, empleado) //fijate tambiem que cambia la url, 
    //estoy usando un post y ademas pasandole un empleado por parametro
  }

  actualizarHabilidad(id:number, empleado: Skill): Observable<Object>{
    return this.httpClient.put(`${this.editarURL}/${id}`, empleado)
  } 

  obtenerHabilidadPorId(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.buscarURL}/${id}`);
  }
  
   public eliminarHabilidad(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL + `/borrar/${id}`);
  }

}
