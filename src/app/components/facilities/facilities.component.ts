import { Component, ElementRef, ViewChild } from '@angular/core';
import { getImageUrl } from '../../constants/images.constant';

@Component({
  selector: 'app-facilities',
  standalone: false,
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css',
})
export class FacilitiesComponent {
  imgUrl = getImageUrl('FACILITIES');
  facilities = [
    { text: "Expericed Teachers", icon: "groups" },
    { text: "E-learning on Smart-Board", icon: "laptop_mac" },
    { text: "Study Materials", icon: "menu_book" },
    { text: "Chapterwise Tests", icon: "quiz" },
    { text: "Personal Guidance", icon: "supervisor_account" },
    { text: "Revision and Doubt sessions", icon: "schedule" },
  ]

  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;
  inView = false;

  constructor() { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.inView = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.counterSection.nativeElement);
  }
}
