import { Component, input, SimpleChanges } from '@angular/core';
import { LoggerService } from '../servicios/logger.service';
import {UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-fotoperfil',
  imports: [UpperCasePipe],
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('Hay cambios');
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
