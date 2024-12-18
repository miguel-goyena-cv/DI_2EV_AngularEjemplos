import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from '../modelos/contactinfo';
import { ContactsService } from '../servicios/contacts.service';

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

  constructor(private contactService: ContactsService) { }
  
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  sendMessage() {

    const contactInformation = new ContactInfo(this.contactForm.get('email')?.value || '', this.contactForm.get('message')?.value || '');
    
    this.contactService.setContact(contactInformation).subscribe(
      newContact => {
        alert('Contact Created:'+ JSON.stringify(newContact));
        this.contactService.notifyUpdateContact(null);
      }
    )

  }


}
