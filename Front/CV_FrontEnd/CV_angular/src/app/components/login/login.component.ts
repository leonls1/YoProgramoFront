import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user='';
  pass='';

  constructor(private auth: AuthenticationService, private router: Router){}

  logIn():void{
    if(this.auth.login(this.user, this.pass)){
      this.router.navigate(['']);
    }
    else{
      alert(this.user + this.pass);
      alert("Contraseña o Usuario Incorrectos");
    }
  }
}
