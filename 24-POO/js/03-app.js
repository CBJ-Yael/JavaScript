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


// HERENCIA
class Empresa extends Cliente{ // empresa es una clase hijo de Cliente y hereda todo sus metodos y atributos al igual que el constructor
    constructor(nombre,saldo,telefono,categoria){ // se renombra el constructor
        super(nombre,saldo); // los busca en el constructor padre

        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ // lo reescribe si existe en la clase padre (Reescribir metodo)
        return `Bienvenido a la clase hijo`;
    };
}


// Instanciamos la clase
const yael = new Cliente('Yael', 1000);
const yaelEmpresa = new Cliente('empresa', 500,1234356789,'Desarollo web');

console.log(yaelEmpresa);
console.log(yaelEmpresa.mostrarInformacion());
console.log(Empresa.bienvenida());