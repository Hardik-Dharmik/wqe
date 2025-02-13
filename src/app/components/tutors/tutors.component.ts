import { Component } from '@angular/core';
import { getImageUrl } from '../../constants/images.constant';

@Component({
  selector: 'app-tutors',
  standalone: false,
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.css'
})
export class TutorsComponent {
  tutors = [
    { imgUrl: getImageUrl('DEEPAK_SIR'), name: "Deepak Sonkusare" },
    { imgUrl: getImageUrl("NILESH_SIR"), name: "Nilesh Dongaonkar" },
    { imgUrl: getImageUrl("MURTAZA_SIR"), name: "Murtaza Karanjawala" },
  ]
}
