import { Injectable } from '@angular/core';

const NOMBRE_APP = "PaginaPersonalMG";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logDebug(mensaje: string){
    console.log('DEBUG: '+NOMBRE_APP+': '+mensaje);
  }

  logDebugConAlerts(mensaje: string){
    alert('DEBUG: '+NOMBRE_APP+': '+mensaje);
  }

  logError(mensaje: string){
    console.error('ERROR: '+NOMBRE_APP+': '+mensaje);
  }
}
