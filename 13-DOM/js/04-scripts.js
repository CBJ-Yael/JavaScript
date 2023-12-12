// QUERYSELECTOR
const card = document.querySelector('.card'); // selecciona por su clase (retorna solo el primer elemento)
console.log(card);

// selectores como en CSS (especificidad)
const info = document.querySelector('.premium .info'); // selecotres especificos
console.log( info )

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)'); // selecciona el segundo elemento (hijo)
console.log( segundoCard );

// SELECCIONAR ID
const form = document.querySelector('#formulario');
console.log( form );

// SELECCIONAR ELEMENTOS HTML
const navegacion = document.querySelector('nav');
console.log( navegacion );

//  5tgb 6f b hnujd