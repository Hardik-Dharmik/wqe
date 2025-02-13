import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  branches = [
    {
      title: "Itwari", address: "Opposite Nikalas Mandir, Itwari, Nagpur, Maharashtra.", phone: "+91 9823225787, +91 8446425052", contact: [
        { name: "Nilesh Sir", phone: "+91 9823225787" },
        { name: "Murtaza Sir", phone: "+91 8446425052" },
      ]
    },
    {
      title: "Namdeo Nagar", address: "Namdeo Nagar, Kawdapeth, Nagpur, Maharashtra", phone: "+91 8788463284 ,+91 8446425052", contact: [
        { name: "Pande Sir", phone: "+91 8788463284" },
        { name: "Murtaza Sir", phone: "+91 8446425052" },
      ]
    },
    {
      title: "Minimata Nagar", address: "Minimata Nagar, Near Janki Nagar, Nagpur, Maharashtra", phone: "+91 9890388706, +91 9922032829", contact: [
        { name: "Ashish Sir", phone: "+91 9890388706" },
        { name: "Ankit Sir", phone: "+91 9922032829" },
      ]
    },
    {
      title: "Pardi", address: "Rarokar Area, Bazar Chowk, Bhandewadi Road, Pardi, Nagpur, Maharashtra", phone: "+91 9372016215, +91 9145099632", contact: [
        { name: "Deepak Sir", phone: "+91 9372016215" },
        { name: "Sudhir Sir", phone: "+91 9145099632" },
      ]
    },
    {
      title: "Netaji Nagar", address: "Above Alpha Computers, Netaji Nagar, Nagpur, Maharashtra", phone: "+91 9922032829, +91 9372016215", contact: [
        { name: "Ankit Sir", phone: "+91 9922032829" },
        { name: "Deepak Sir", phone: "+91 9372016215" },
      ]
    },
    {
      title: "Nara", address: "Near Nara Bus stop, Nara, Nagpur, Maharashtra", phone: "+91 9822938157, +91 8055284739", contact: [
        { name: "Simant Sir", phone: "+91 9822938157" },
        { name: "Manish Sir", phone: "+91 8055284739" },
      ]
    },
  ]

}
