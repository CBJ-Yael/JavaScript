function Cliente(name,saldo){
    this.nombre = name,
    this.saldo = saldo
}

const clienteNuevo = new Cliente('Yael',200);

console.log(clienteNuevo);

function formatearCliente(cliente){
    const {nombre,saldo} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
function formatearEmpresa(empresa){
    const {nombre,saldo,categoria} = empresa
    return `La empresa "${nombre}" tiene un saldo de $${saldo} y su categoria es de "${categoria}"`;
}

console.log(formatearCliente(clienteNuevo));

function Empresa(name,saldo,categoria){
    this.nombre = name
    this.saldo = saldo
    this.categoria = categoria
}

const jycb = new Empresa('jycb',1000,'desarrollo web');
console.log( formatearEmpresa(jycb) );