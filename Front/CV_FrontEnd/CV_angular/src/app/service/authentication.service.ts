import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated: boolean = false; //la varible que se queda cargada si es que se inicia o no sesion

  constructor() { }

  login(username:string, password:string):boolean{
    if (username === 'Leon' && password === 'yoProgramo2022'){
      this.isAuthenticated = true;
      return true;
    } else{
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {  //para cuando presione cerrar sesion cambia a false mi variable y por lo tanto se bloquean otras cosas
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean { //para preguntar si me he logeado ya
    return this.isAuthenticated;
  }
}
