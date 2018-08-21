import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { CoverComponent } from './body/cover/cover.component';
import { ExperienceComponent } from './body/experience/experience.component';
import { TechnologiesComponent } from './body/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CoverComponent,
    ExperienceComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
