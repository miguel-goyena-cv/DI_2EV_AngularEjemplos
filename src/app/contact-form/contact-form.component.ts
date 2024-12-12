import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  email = new FormControl('');
  message = new FormControl('');


  sendMessage() {
    alert('Mensaje: \n' + this.message.value + '\nenviado a: ' + this.email.value);
  }

}
