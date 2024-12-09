import { Component } from '@angular/core';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { HttpClient } from '@angular/common/http';
import { ProfilesService } from './servicios/profiles.service';
import { Profile } from './modelos/Profile';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FotoperfilComponent, ExperienceComponent, ContactFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejemplo para 2 DAM';
  listaPerfiles: any[] = [];
  listaPerfilesAsync$!: Observable<Profile[]>;

  constructor(private http: HttpClient, private profileService: ProfilesService) {}

  ngOnInit() {

    this.listaPerfilesAsync$ = this.profileService.getProfiles();

    // this.http.get('https://672b4bd6976a834dd0267918.mockapi.io/profiles', {observe: 'response'}).subscribe(res => {
    //   console.log('Response status:', res.status);
    //   console.log('Body:', res.body);
    //   this.listaPerfiles = res.body as any[];
    // });

    this.listaPerfiles = [
      {
        nombre: 'Karla lasluisa',
        foto: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
        conBoton: true
      },
      {
        nombre: 'Julen medina' ,
        foto: 'https://cdn-icons-png.flaticon.com/512/4086/4086652.png',
        conBoton: false
      }
    ];

  }

  
  ngOnDestroy() {
    this.listaPerfiles = [];
  }
}
