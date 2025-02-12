import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-card',
  standalone: false,
  templateUrl: './tutor-card.component.html',
  styleUrl: './tutor-card.component.css'
})
export class TutorCardComponent {
  @Input() tutor: { imgUrl: string, name: string } = { imgUrl: "", name: "" };
}
