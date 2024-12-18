import { Routes } from '@angular/router';
import {InformacionContactoComponent} from './informacion-contacto/informacion-contacto.component';
import {InformacionPerfilComponent} from './informacion-perfil/informacion-perfil.component';

export const routes: Routes = [
    { path: 'informacion-perfil', component: InformacionPerfilComponent },
    { path: 'información-contacto', component: InformacionContactoComponent },
];
