import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal',
  standalone: false,
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.css'
})
export class CarousalComponent {

  // slides = [
  //   "https://pixabay.com/photos/autumn-forest-trees-nature-sunset-6690466/",
  //   "https://www.pexels.com/photo/silhouette-of-mountains-1323550/",
  //   "https://www.pexels.com/photo/person-standing-on-grass-field-while-opening-hands-1583582/"
  // ]

  slides = [
    "p1.jpg",
    "p2.jpg",
    "p3.jpg"
  ]

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex]}')`;
  }

}
