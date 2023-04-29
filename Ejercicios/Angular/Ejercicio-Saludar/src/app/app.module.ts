import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FormCambiarTextoComponent } from './components/form-cambiar-texto/form-cambiar-texto.component';
import { AppComponent } from './app.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FormCambiarTextoComponent,
    MostrarOcultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
