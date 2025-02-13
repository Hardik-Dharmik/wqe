import { Component } from '@angular/core';
import { Class } from '../../services/class.service';
import { getImageUrl } from '../../constants/images.constant';
import { classesList } from '../../constants/class.constants';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  classes: Class[] = classesList;
}
