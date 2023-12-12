// TRAVERSING THE DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children); // solo trae los elementos

console.log(navegacion.firstChild); // te trae el primer elemento
console.log(navegacion.lastElementChild); // te trae el ultimo elemento


// TODO --- IDENTIFICAR LOS ELEMENTOS
console.log(navegacion.children[0]);
console.log(navegacion.children[0].nodeName); // nodeName es la etiqueta
console.log(navegacion.children[0].nodeType);

// ACCEDER A SUS HIJOS
const card = document.querySelector('.card');
console.log(card.children);
console.log(card.children[0]);
console.log(card.children[1]);
console.log(card.children[1].children);
console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM';
card.children[0].src = 'img/hacer2.jpg';


// TODO --- ACCEDER AL PADRE
console.log(card);
// console.log(card.parentNode); // toma en cuenta los espacio
console.log(card.parentElement.parentElement);


// TODO ---- acceder al hermano
console.log(card);
console.log(card.nextElementSibling); // selecciona al siguiente elemento

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling); // te da el elemento anterior (card[3])
