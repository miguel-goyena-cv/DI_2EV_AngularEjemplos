import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { ContactListComponent } from "../contact-list/contact-list.component";

@Component({
  selector: 'app-informacion-contacto',
  imports: [ContactFormComponent, ContactListComponent],
  templateUrl: './informacion-contacto.component.html',
  styleUrl: './informacion-contacto.component.scss'
})
export class InformacionContactoComponent {

}
