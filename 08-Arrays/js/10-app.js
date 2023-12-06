const carrito = [
    {nombre: "Monitor 27 pulgdas",precio: 200},
    {nombre: "Celular Xiaomi",precio: 350},
    {nombre: "Audifonos",precio: 20},
    {nombre: "Teclado Gamer",precio: 60},
    {nombre: "Mouse Gamer Asus",precio: 25},
    {nombre: "Bocina",precio: 50},
    {nombre: "PS5",precio: 700},
]

const nuevoArreglo = carrito.forEach( function(producto){
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
})

const nuevoArreglo2 = carrito.map( function(producto){ // Te crea un arreglo nuevo
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo); // UNDEFINED
console.log("---------------------------------------------------------");
console.log(nuevoArreglo2); // regresa el neuvo arreglo