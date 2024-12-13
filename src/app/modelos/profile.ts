export class Profile {

    nombre: string;
    foto: string;
    conBoton: boolean;
    
    constructor(nombre: string, foto: string, conBoton: boolean) {
        this.nombre = nombre;
        this.foto = foto;
        this.conBoton = conBoton;
    }
}
