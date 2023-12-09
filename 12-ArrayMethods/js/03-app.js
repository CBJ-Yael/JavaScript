const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log( total );

// CON .REDUCE
let resultado = carrito.reduce( (total,producto) => total + producto.precio,0 );

// La función reduce() es un método que se puede llamar en un arreglo y que toma una función como argumento. La función que se pasa a reduce() se llama reductor y se ejecuta una vez por cada elemento del arreglo. El reductor toma dos argumentos: el acumulador y el elemento actual. En este caso, la función reductora es (total,producto) => total + producto.precio y el acumulador se inicializa en 0.
// La función reductora toma dos argumentos: total y producto. total es el valor acumulado que se va a devolver al final de la ejecución de la función reductora. producto es el elemento actual del arreglo. En cada iteración, la función reductora suma el precio del producto al valor acumulado y devuelve el resultado. Al final de la ejecución de la función reductora, reduce() devuelve el valor acumulado.
// En resumen, resultado es la suma de los precios de todos los productos en el arreglo carrito.

console.log(resultado);
