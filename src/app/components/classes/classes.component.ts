import { Component } from '@angular/core';
import { Class } from '../../services/class.service';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  classes: Class[] = [
    { standard: "8th, 9th and 10th", type: "State / CBSE", description: "Our coaching program for 8th, 9th, and 10th grades focuses on building a strong academic foundation with interactive and engaging teaching methods. As students progress, the curriculum becomes more detailed, and we introduce mock tests and practice exams to help them manage time and cope with exam pressures. By 10th grade, the coaching is intensive with thorough revision sessions, ensuring students achieve their best possible results in board exams.", subjects: ["Maths", "Science", "English"], icon: "school", iconBgColor: "bg-green-200", imgUrl: "8th_9th_10th.jpg" },
    { standard: "11th and 12th Science", type: "State", description: "Our coaching program for 11th and 12th grade Science focuses on strengthening students' understanding of subjects such as Physics, Chemistry, Biology, and Mathematics. We offer detailed lessons, interactive problem-solving sessions, and regular tests to ensure students grasp complex concepts effectively. The program is designed to prepare students for competitive exams and board exams, with intensive revision sessions and personalized feedback to help them achieve their academic goals.", subjects: ["Physics", "Chemistry", "Maths"], icon: "science", iconBgColor: "bg-teal-200", imgUrl: "11th_12th.jpg" },
    { standard: "JEE and MHTCET", type: "Entrance", description: "Our coaching program for JEE and MHT-CET is designed to help students excel in these competitive exams. We offer in-depth lessons in Physics, Chemistry, and Mathematics, with a focus on conceptual clarity and problem-solving techniques. The program includes regular mock tests, personalized feedback, and intensive revision sessions to ensure students are well-prepared for both JEE and MHT-CET, helping them secure admissions in top engineering colleges.", subjects: ["Physics", "Chemistry", "Maths"], icon: "engineering", iconBgColor: "bg-amber-200", imgUrl: "jee_mhtcet.jpg" },
    { standard: "NEET", type: "Entrance", description: "Our NEET coaching program is meticulously designed to prepare students for the medical entrance exam. We provide comprehensive lessons in Physics, Chemistry, and Biology, with a strong emphasis on conceptual understanding and application. The program includes regular mock tests, personalized feedback, and intensive revision sessions to ensure students are well-prepared and confident. Our goal is to help students achieve high scores and secure admissions to top medical colleges.", subjects: ["Physics", "Chemistry", "Biology"], icon: "biotech", iconBgColor: "bg-pink-200", imgUrl: "neet.jpg" },
  ]
}
