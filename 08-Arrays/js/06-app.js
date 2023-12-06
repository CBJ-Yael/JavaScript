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

// AGREGAR ELEMENTS CON EL SPREAD OPERATOR (FORMA DECLARATIVA)
let resultado
resultado = [...carrito,producto]; // Crea una copia del carrito y el segundo parametro es el valor que se le agrega
resultado = [...resultado, producto2];
resultado = [producto3,...resultado] // Agregar valores al inicio



console.table(resultado);
