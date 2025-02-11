import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { CarousalComponent } from './components/carousal/carousal.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ClassCardComponent } from './components/classes/class-card/class-card.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { CountUpModule } from 'ngx-countup';
import { TutorsComponent } from './components/tutors/tutors.component';
import { TutorCardComponent } from './components/tutors/tutor-card/tutor-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { BranchesComponent } from './components/contact/branches/branches.component';
import { BranchCardComponent } from './components/contact/branches/branch-card/branch-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    CarousalComponent,
    WelcomeComponent,
    HeroComponent,
    HomeComponent,
    ClassesComponent,
    ClassCardComponent,
    FacilitiesComponent,
    TutorsComponent,
    TutorCardComponent,
    ContactComponent,
    ContactFormComponent,
    BranchesComponent,
    BranchCardComponent
  ],
  imports: [
    MatIconModule,
    CountUpModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
