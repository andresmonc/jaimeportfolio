import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { CoverComponent } from './body/cover/cover.component';
import { ExperienceComponent } from './body/experience/experience.component';
import { TechnologiesComponent } from './body/technologies/technologies.component';
import { ResumeComponent } from './body/resume/resume.component';
import { FormComponent } from './body/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CoverComponent,
    ExperienceComponent,
    TechnologiesComponent,
    ResumeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
