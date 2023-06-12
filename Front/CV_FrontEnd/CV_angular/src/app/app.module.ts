import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { TopBarComponent } from './components/intro/top-bar/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExpComponent } from './components/experience/new-exp/new-exp.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IntroComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    TopBarComponent,
    HomeComponent,
    LoginComponent,
    NewExpComponent,
    EditExpComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditProyectComponent,
    NewProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
