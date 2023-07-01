import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //link lanzamiento
  //eduURL = 'https://backendlls.onrender.com/CV/V1/edu';

  //link desarrollo
  eduURL = 'http://localhost:8080/CV/V1/edu'
  constructor(private httpClient: HttpClient) { }

  public bringEducations():Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.eduURL+'/educacion');
  }

  public saveEducation(edu:Education):Observable<any>{
    return this.httpClient.post<any>(this.eduURL + '/crear',edu);
  }

  public detailEducation(id:number):Observable<Education>{
    return this.httpClient.get<Education>(this.eduURL + `/buscar/${id}`);
  }

  public editEducation(edu:Education, id:number):Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `/actualizar/${id}`,edu);
  }


  public deleteEducation(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.eduURL +`/borrar/${id}`);
  }
}
