// MODIFICAR EL CSS
const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = "red";
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = "uppercase"

const card = document.querySelector('.card');

card.classList.add('nueva-clase','segunda-clase'); // agregar clase
card.classList.remove('nueva-clase'); // elimina una clase

console.log(card.classList);
