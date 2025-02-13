import { Component, inject } from '@angular/core';
import { getImageUrl } from '../../constants/images.constant';
import { ClassesComponent } from '../classes/classes.component';
import { Class } from '../../services/class.service';
import { classesList } from '../../constants/class.constants';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logoURL = getImageUrl('LOGO');
  classes: Class[] = classesList;
}
