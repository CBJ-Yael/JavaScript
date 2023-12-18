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


// Instanciar 
const panchito = new Cliente('panchito',10000);
console.log(panchito.informacion());
console.log(panchito.retirarSaldo(1000));
console.log(panchito.informacion());