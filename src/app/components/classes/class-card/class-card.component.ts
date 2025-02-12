import { Component, Input } from '@angular/core';
import { Class } from '../../../services/class.service';

@Component({
  selector: 'app-class-card',
  standalone: false,
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.css'
})
export class ClassCardComponent {
  @Input() class !: Class;
}
