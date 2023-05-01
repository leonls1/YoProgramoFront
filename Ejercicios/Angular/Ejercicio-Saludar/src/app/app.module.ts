import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module'; // aca estan declaradas las rutas posibles

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AppComponent } from './app.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';
import { ListaNombresV1Component } from './components/lista-nombres-v1/lista-nombres-v1.component';
import { PrototipoListaContactosComponent } from './components/lista-contactos-v1/prototipo-lista-contactos.component';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosV2Component } from './components/lista-contactos-v2/lista-contactos-v2.component';
import { ListaCrudComponent } from './components/lista-crud/lista-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    MostrarOcultarComponent,
    ListaNombresV1Component,
    PrototipoListaContactosComponent,
    HomeComponent,
    ListaContactosV2Component,
    ListaCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
