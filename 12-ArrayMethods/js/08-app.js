const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// SPREAD OPERATOR CON ARREGLO DE INDICIES

const meses2 = [...meses,'Agosto']; // no modifica el arreglo original
// const mesesError = [...meses,...'Agosto']; // no se hace asio ya que crea un espacio para cada letra

console.log(meses);
console.log(meses2);


// SPREAD OPERATOR CON ARREGLO DE OBJETOS
const producto = { producto: 'Disco duro',precio : 300 };
const carritoLarge = {...carrito,producto}; // agrega un objeto más a una nueva variable

console.log(carritoLarge);
console.log(carrito);

// SPREAD OPERATOR VIENE DE PROGRAMACIÓN FUNCIONAL