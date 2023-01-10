import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponente1Component } from './front/Ejercicios/Angular/ProyectoPrueba_Angular/src/app/componentes/nuevo-componente1/nuevo-componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponente1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
