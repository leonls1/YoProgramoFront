import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private URLBase = 'http://localhost:8080/CV/V1/habilidades';
  constructor(private httpClient:HttpClient) { }

  public traerSkills():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URLBase);
  }
}
