import { Component } from '@angular/core';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-contact-main',
  imports: [ContactListComponent, ContactFormComponent],
  templateUrl: './contact-main.component.html',
  styleUrl: './contact-main.component.scss'
})
export class ContactMainComponent {

}
