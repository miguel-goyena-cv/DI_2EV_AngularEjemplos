import { Component } from '@angular/core';
import { ContactInfo } from '../modelos/contactinfo';
import { Observable } from 'rxjs/internal/Observable';
import { ContactsService } from '../servicios/contacts.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-contact-list',
  imports: [AsyncPipe],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  allContacts$!: Observable<ContactInfo[]>;
  subscriptionUpdate: Subscription = new Subscription;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.allContacts$ = this.contactService.getAllContacts();

    alert('He recuperado la lista de contactos: Voy a subscribirme');

    // We subscribe to changes in Contacts
    this.subscriptionUpdate = this.contactService.changesOnContacts.subscribe(
      () => {
        alert('Voy a refrescar la lista de contactos');
        this.allContacts$ = this.contactService.getAllContacts();
        alert('Ya la he refrescado');
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionUpdate.unsubscribe();
  }
}
