import { Component } from '@angular/core';
import { ContactsService } from '../servicios/contacts.service';
import { ContactInfo } from '../modelos/ContactInfo';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [AsyncPipe],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  allContacts$!: Observable<ContactInfo[]>;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.allContacts$ = this.contactService.getAllContacts();
  }

}
