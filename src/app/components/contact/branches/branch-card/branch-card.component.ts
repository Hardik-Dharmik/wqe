import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-card',
  standalone: false,
  templateUrl: './branch-card.component.html',
  styleUrl: './branch-card.component.css'
})
export class BranchCardComponent {
  router = inject(Router);

  @Input() branch: any;

  goToBranchDetails() {
    this.router.navigateByUrl('/location-detail', { state: this.branch });
  }

}
