function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Agregar una nueva funcion (prototype)
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if( this.saldo >= 10000 ){
        tipo = 'Gold'
    }else if( this.saldo >= 5000 ){
        tipo = 'Platinum'        
    } else{
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.informacion = function(){
    return `Nombbre: "${this.nombre}", saldo: $${this.saldo}, Tipo de cliente: "${this.tipoCliente()}"`;
}

Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira;
    return `Tu saldo actual es de: ${this.saldo}`;
}


function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre, saldo); // Heredar el constructor
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype ); // hereda todo el prototype
Persona.prototype.constructor = Cliente;

// Instanciar
const user = new Persona('yael',100,1212121212);
console.log(user);
console.log(user.informacion());

// Prototype solo de Persona
Persona.prototype.mostrarTelefono = function(){
    return `Numero de telefono es: ${this.telefono}`;
}

console.log(user.mostrarTelefono());