import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getImageUrl } from '../../constants/images.constant';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  router = inject(Router);
  logoUrl = getImageUrl('LOGO_BLACK');

  goToAboutUs() {
    this.router.navigateByUrl('/about-us');
  }
}
