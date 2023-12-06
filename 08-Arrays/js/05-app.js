const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 500
}

const producto2= {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// forma imperativa
// AGREGAR AL FINAL DE UN ARREGLO
carrito.push(producto);
carrito.push(producto2);

// AGREGA AL INICIO DE UN ARREGLO
carrito.unshift(producto3);

console.table(carrito);
