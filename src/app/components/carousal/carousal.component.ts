import { Component } from '@angular/core';
import { getImageUrl } from '../../constants/images.constant';

@Component({
  selector: 'app-carousal',
  standalone: false,
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.css'
})
export class CarousalComponent {

  slides = [
    getImageUrl('CAROUSAL_1'),
    getImageUrl('CAROUSAL_2'),
    getImageUrl('CAROUSAL_3'),
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
    this.timeoutId = window.setTimeout(() => this.goToNext(), 4000);
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
