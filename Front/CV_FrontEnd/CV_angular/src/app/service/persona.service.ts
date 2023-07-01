import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //private URLBase = 'https://backendlls.onrender.com/CV/V1/personas';
  //link desarrollo
  URLBase = 'http://localhost:8080/CV/V1/personas'

  constructor(private httpCliet :HttpClient) { }

  public getUsuarios():Observable<Persona[]> {
    return this.httpCliet.get<Persona[]>(this.URLBase);
  }

  public getUsuarioPpal():Observable<Persona> {
    return this.httpCliet.get<Persona>(this.URLBase + '/buscar/1')
  }

}
