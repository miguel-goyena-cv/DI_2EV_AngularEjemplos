import { Component, input } from '@angular/core';
import { LoggerService } from '../servicios/logger.service';

@Component({
  selector: 'app-fotoperfil',
  imports: [],
  templateUrl: './fotoperfil.component.html',
  styleUrl: './fotoperfil.component.scss'
})
export class FotoperfilComponent {

  myName = input("Nombre");
  srcImage = input("foto.jpg");
  nombreOcultado: boolean = false;
  tieneBoton = input(true);

  constructor(private logger: LoggerService) { }

  ocultarNombre() {
    this.logger.logDebugConAlerts("Le ha dado al boton, mi variable nombreOacultado es: "+this.nombreOcultado);
    this.nombreOcultado = !this.nombreOcultado;
  }
}
