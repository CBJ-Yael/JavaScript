const producto = '     Monitor de 20 pulgadas'

console.log(producto)
console.log(producto.length)

// ELIMINAR ESPACIOS DEL INICIO
console.log(producto.trimStart() ); // te regresa un string (muestra) sin espacios em el inicio

// ELIMINAR ESPACIOS AL FINAL
console.log(producto.trimEnd()); // te regresa un string (muestra) sin espacios al final

// JUNTAR DOS METODOS
console.log(producto.trimStart().trimEnd()); // te regresa un string (muestra) sin espacios

// BORRAR AMBDAS DIRECCIONES
console.log(producto.trim()); // te regresa un string (muestra) sin espacios
