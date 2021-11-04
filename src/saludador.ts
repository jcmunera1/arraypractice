export default class saludador {
    protected nombre: string;

    constructor (nombre: string){
        this.nombre = nombre;
    }
    public saludar(){
        console.log ("hola " + this.nombre);
    }
}