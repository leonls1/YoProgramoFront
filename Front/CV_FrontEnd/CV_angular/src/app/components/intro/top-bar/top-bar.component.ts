import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

  loggedIn: boolean = false;

  constructor(private router:Router, private auth:AuthenticationService){}


  ngOnInit(): void {
    this.loggedIn = this.auth.isLoggedIn();
  }

  login(){
    this.router.navigate(['/login']);
  }

  logOut(){
    this.auth.logout();   
    this.loggedIn = false;
    location.reload()
  }
}
