import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../models/Proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  baseUrl: string = "http://localhost:8080/CV/V1/pro/"

  constructor(private http: HttpClient) { }

  public getProyects():Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.baseUrl + 'proyects');
  }

  public detailProyect(id : number):Observable<Proyect>{
    return this.http.get<Proyect>(this.baseUrl + `find/${id}`)
  }

  public saveProyect(proyect : Proyect):Observable<any>{
    return this.http.post<any>(this.baseUrl + 'save', proyect);
  }

  public editProyect(id:number, proyect : Proyect):Observable<any>{
    return this.http.put<any>(this.baseUrl +`edit/${id}`, proyect);
  }

  public deleteProyect(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl + `delete/${id}`);
  }


}