const cliente = {
    nombre: "Yael",
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


// Lo que era la programacion orientada a objetos
function Cliente(name,saldo){
    this.nombre = name,
    this.saldo = saldo
}

const clienteNuevo = new Cliente('Yael',200);

console.log(clienteNuevo);