import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototipoListaContactosComponent } from './components/lista-contactos-v1/prototipo-lista-contactos.component';
import { MostrarOcultarComponent } from './components/mostrar-ocultar/mostrar-ocultar.component';
import { ListaNombresV1Component } from './components/lista-nombres-v1/lista-nombres-v1.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosV2Component } from './components/lista-contactos-v2/lista-contactos-v2.component';
import { ListaCrudComponent } from './components/lista-crud/lista-crud.component';
import { FormularioConValidacionComponent } from './components/formulario-con-validacion/formulario-con-validacion.component';

const routes: Routes =
  // aca van todas las rutas
  [
    { path: 'home', component: HomeComponent }, //este va a ser el camino por defecto, donde se inicia la app y a donde se redirige
    { path: 'contactos', component: PrototipoListaContactosComponent },
    { path: 'contactos_v2', component: ListaContactosV2Component },
    { path: 'mostrarOcultar', component: MostrarOcultarComponent },
    { path: 'listaNombres', component: ListaNombresV1Component },
    { path: 'cambiarTitulo', component: HeaderComponent },
    { path: 'ListasCRUD', component: ListaCrudComponent },
    { path: 'FormValidado', component: FormularioConValidacionComponent },
    { path: '**', redirectTo: 'home' }, // es aca que le indico en el caso que se ingrese una url
    // que no este listada me envie al home a home(header)
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
