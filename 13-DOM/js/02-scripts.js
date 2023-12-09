// SELECCIONAR ELEMENTOS POR SU CLASE

const header = document.getElementsByClassName('header'); // selecciona un elemento con esa clase
console.log( header );

const hero = document.getElementsByClassName('hero');
console.log( hero );

// SI LAS CLASES SE REPITEN
const contenedores = document.getElementsByClassName('contenedor'); // si regresa todos los elementos
console.log( contenedores );

// SI UNA CLASE NO EXISTE
const noExiste = document.getElementsByClassName('noexiste'); // retorna un arreglo vacio
console.log(noExiste);
