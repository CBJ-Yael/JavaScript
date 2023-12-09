const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un valor existe en un arreglo
meses.forEach( mes =>{ // forma manual
    if( mes == 'Enero' ){
        console.log("Si existe");
    }
});

const resultado = meses.includes('Enero'); // forma automatica (true o false)
console.log(resultado);

// COMPROBAR SI UN VALOR EXISTE EN UN ARREGLO DE OBJETOS
const existe = carrito.some( producto =>  producto.nombre == "Celular");
console.log( existe );

// EN UN ARREGLO TRADICIONAL DE INDICES
const existe2 = meses.some( mes => mes == "Enero");
console.log(existe2);