import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {


  title: String = 'Header';

  saludarALeon(){
    this.title = "Hola Leon";
}

  saludarSasha() {
    this.title= "Hola Sasha"
  }

  cambiarTitulo(texto:string) {
    this.title=texto;
    }
}
