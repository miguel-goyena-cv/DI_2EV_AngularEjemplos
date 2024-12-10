import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../modelos/ContactInfo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {}

  setContact(contactInfo : ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>('https://672b4bd6976a834dd0267918.mockapi.io/contacts', contactInfo);
  }

  getAllContacts(): Observable<ContactInfo[]>{
    return this.http.get<ContactInfo[]>('https://672b4bd6976a834dd0267918.mockapi.io/contacts');
  }
}
