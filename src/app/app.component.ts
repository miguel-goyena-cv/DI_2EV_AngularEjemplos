import { Component, SimpleChanges } from '@angular/core';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  imports: [FotoperfilComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejemplo para 2 DAM';
  listaPefiles: any[] = [];

  ngOnInit() {
    this.listaPefiles = [
      {
        nombre: 'karla lasluisa',
        foto: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
        conBoton: true
      },
      {
        nombre: 'Julen medina',
        foto: 'https://cdn-icons-png.flaticon.com/512/4086/4086652.png',
        conBoton: false
      }

    ];
  }

}
