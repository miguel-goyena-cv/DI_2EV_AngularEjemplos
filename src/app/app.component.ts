import { Component, SimpleChanges } from '@angular/core';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { HttpClient } from '@angular/common/http';
import { ProfilesService } from './servicios/profiles.service';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from './modelos/profile';
import {AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FotoperfilComponent, ContactFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejemplo para 2 DAM';
  listaPerfilesAsync$!: Observable<Profile[]>;

  constructor(private http: HttpClient, private profileService: ProfilesService) { }

  ngOnInit() {
    this.listaPerfilesAsync$ = this.profileService.getProfiles();
  }

}
