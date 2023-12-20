// Class declaration
class Cliente {
    #nombre; // propiedad privada

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){ // crear un prototype
        return `Cliente: ${this.#nombre}, saldo: ${this.saldo}`; // los metodos pueden acceder a propiedades privadas
    };

    getNombre(){
        return this.#nombre;
    }

    static bienvenida(){ // las propiedades estaticas no necesitan tener una clase instanciada para llamarla.
        return `Bienvenido al cajero`;
    };
}


const yael = new Cliente('yael',200);

console.log(yael.getNombre());