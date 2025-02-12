import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ClassDetailComponent } from './components/classes/class-detail/class-detail.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'courses',
        component: ClassesComponent,
      },
      {
        path: 'coursedetail',
        component: ClassDetailComponent
      },
      {
        path: 'location-detail',
        component: LocationDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
