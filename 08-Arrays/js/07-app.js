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

// ELIMINAR ELEMENTOS AL FINAL DE UN ARREGLO
resultado.pop();

// ELIMINAR ELEMENTOS AL INICIO DE UN ARREGLO
resultado.shift();

// ELIMINAR UN ELEMENTO EN ESPECIFICO
resultado.splice(1,1) // desde donde empieza a cortar y hasta doonde termina

console.table(resultado);