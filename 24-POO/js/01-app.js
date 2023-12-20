// Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){ // crear un prototype
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    };

    static bienvenida(){ // las propiedades estaticas no necesitan tener una clase instanciada para llamarla.
        return `Bienvenido al cajero`;
    };
}

console.log(Cliente.bienvenida());

// Instanciamos la clase
const yael = new Cliente('Yael', 1000);

console.log(yael);
console.log(yael.mostrarInformacion()); // acceder al prototype
// console.log(yael.bienvenida()); // no se puede llamar ya que pertenece a la clase


// Class expression
const Clietne2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const yael2 = new Clietne2('Yael2', 1000 * 2);
console.log(yael2)