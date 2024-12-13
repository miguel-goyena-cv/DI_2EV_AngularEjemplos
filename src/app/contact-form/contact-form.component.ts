import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) { }
  
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  sendMessage() {
    const contactInformation = {
      email: this.contactForm.get('email')?.value,
      message: this.contactForm.get('message')?.value,
      date: new Date()
    };

    this.http.post('https://672b4bd6976a834dd0267918.mockapi.io/contacts',
      contactInformation).subscribe(newContact => {
        alert('Contact Created:' + JSON.stringify(newContact));
      });

  }


}
