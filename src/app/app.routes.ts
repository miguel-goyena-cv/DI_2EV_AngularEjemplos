import { Routes } from '@angular/router';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ContactMainComponent } from './contact-main/contact-main.component';

export const routes: Routes = [
    { path: 'informacion-perfil', component: ProfileMainComponent },
    { path: 'información-contacto', component: ContactMainComponent },   
];
