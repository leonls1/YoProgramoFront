import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpComponent } from './components/main-components/exp/exp.component';
import { IntroComponent } from './components/main-components/intro/intro.component';
import { EducationComponent } from './components/main-components/education/education.component';
import { SkillsComponent } from './components/main-components/skills/skills.component';
import { MainComponent } from './components/main/main.component';
import { ProyectsComponent } from './components/main-components/proyects/proyects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/header-components/nav-bar/nav-bar.component';
import { OptionBarComponent } from './components/header-components/option-bar/option-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    IntroComponent,
    EducationComponent,
    SkillsComponent,
    MainComponent,
    ProyectsComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    OptionBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
