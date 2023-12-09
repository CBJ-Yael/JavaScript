const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 ); // regresa en arreglo todos los productos que sean mayores a 400

resultado = carrito.filter( elemento => elemento.precio < 600 ); // regresa un nuevo arreglo

resultado = carrito.filter( producto => producto.nombre !== "Tablet" ); // regresa todos, menos de la tablet

console.log(resultado);
