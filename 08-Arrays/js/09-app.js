
const carrito = [
    {nombre: "Monitor 27 pulgdas",precio: 200},
    {nombre: "Celular Xiaomi",precio: 350},
    {nombre: "Audifonos",precio: 20},
    {nombre: "Teclado Gamer",precio: 60},
    {nombre: "Mouse Gamer Asus",precio: 25},
    {nombre: "Bocina",precio: 50},
    {nombre: "PS5",precio: 700},
]

for( let i= 0; i < carrito.length;i++ ){
    console.log(`Producto: ${carrito[i].nombre} Tiene un precio de: ${carrito[i].precio}`);
}   

console.log("---------------------------------------------------------");

carrito.forEach( function(producto){
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
})
