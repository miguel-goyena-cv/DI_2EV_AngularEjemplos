import { Component } from '@angular/core';
import { FotoperfilComponent } from "../fotoperfil/fotoperfil.component";
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { ProfilesService } from '../servicios/profiles.service';
import { Profile } from '../modelos/profile';
import {AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-main',
  imports: [FotoperfilComponent, AsyncPipe],
  templateUrl: './profile-main.component.html',
  styleUrl: './profile-main.component.scss'
})
export class ProfileMainComponent {

  title = 'Ejemplo para 2 DAM';
  listaPerfilesAsync$!: Observable<Profile[]>;

  constructor(private http: HttpClient, private profileService: ProfilesService) { }

  ngOnInit() {
    this.listaPerfilesAsync$ = this.profileService.getProfiles();
  }

}
