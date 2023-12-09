const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// FORMA MANUAL
meses.forEach( (mes,index) => mes == "Abril" ? console.log("si existe") : console.log("no existe") );

// FORMA CON findIndex 
const indice = meses.findIndex( mes => mes === "Abril" ); // te retorna la posición (si no esta retorna -1)

console.log( indice );

if( indice >= 0  ){
    console.log("Si existe");
} else{
    console.log("no existe");
}


// EN OBJETOS
const indexCarrito = carrito.findIndex( producto =>  producto.nombre === "Monitor 27 Pulgadas" );
console.log( indexCarrito );

if( indexCarrito >= 0 ){
    console.log("Felicidades!... funcióno")
} else{
    console.log( "No funcióno :(" );
};


