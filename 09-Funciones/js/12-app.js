const carrito = [
    {nombre: "Monitor 27 pulgdas",precio: 200},
    {nombre: "Celular Xiaomi",precio: 350},
    {nombre: "Audifonos",precio: 20},
    {nombre: "Teclado Gamer",precio: 60},
    {nombre: "Mouse Gamer Asus",precio: 25},
    {nombre: "Bocina",precio: 50},
    {nombre: "PS5",precio: 700},
]

carrito.forEach( producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`));

const nuevoArreglo2 = carrito.map( producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`)

console.log("---------------------------------------------------------");
console.log(nuevoArreglo2); // regresa el neuvo arreglo
