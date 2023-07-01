import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  //expURL = 'https://backendlls.onrender.com/CV/V1/exp';

  //link desarrollo
  expURL = 'http://localhost:8080/CV/V1/exp'
  constructor(private httpClient: HttpClient) { }

  public traerExperiencias():Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + '/experiencias');
    //es asi que termina retornandome una lista de todas las experiencias que en la base esten cargadas
  }

  public detail(id:number):Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `/buscar/${id}`); //el signo $ es para indicar que
    //le envio el parametro recibido en mi metodo
  }

  public save(experience:Experience):Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/crear', experience);
  }

  public update(experience:Experience, id: number):Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/actualizar/${id}`, experience);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.expURL + `/borrar/${id}`);
  }
}
