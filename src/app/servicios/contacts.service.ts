import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from '../modelos/contactinfo';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnContacts: Observable<any> = this.updateSubject.asObservable();

  constructor(private http: HttpClient) {}

  setContact(contactInfo : ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>('https://672b4bd6976a834dd0267918.mockapi.io/contacts', contactInfo);
  }

  getAllContacts(): Observable<ContactInfo[]>{
    return this.http.get<ContactInfo[]>('https://672b4bd6976a834dd0267918.mockapi.io/contacts');
  }

  /*
    Notificamos del cambio en un contacto
   */
  notifyUpdateContact(data: any) {
    this.updateSubject.next(data)
  }
}
