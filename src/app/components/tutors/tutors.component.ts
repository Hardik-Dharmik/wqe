import { Component } from '@angular/core';

@Component({
  selector: 'app-tutors',
  standalone: false,
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.css'
})
export class TutorsComponent {
  tutors = [
    { imgUrl: "deepak_sir.jpeg", name: "Deepak Sonkusare" },
    { imgUrl: "nilesh_sir.jpeg", name: "Nilesh Dongaonkar" },
    { imgUrl: "murtaza_sir.jpeg", name: "Murtaza Karanjawala" },
    { imgUrl: "deepak_sir.jpeg", name: "Deepak Sonkusare" },
  ]
}
