// CREAR UN ELEMENTO
const nuevoEnlace = document.createElement("A");
nuevoEnlace.textContent = 'Nuevo enlace'; // agrega el texto
nuevoEnlace.href = '/nuevo-enlace'; // hef
nuevoEnlace.target = '_blank' // lo abre en una nueva pestaña
nuevoEnlace.classList.add('nuevaClase','enlaceConJs');
nuevoEnlace.onclick = miFuncion;

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace); // lo coloca al final de los hijos
navegacion.insertBefore(nuevoEnlace,navegacion.children[1]); // seleccionar la posicion

console.log(nuevoEnlace);

function miFuncion(e){
    console.log(`Diste click en "${e.target.textContent}"`);
}


// TODO >>> crear un card de forma dinamica
const parrafo1 = document.createElement('P');
const parrafo2 = document.createElement('P');
const parrafo3 = document.createElement('P');

const divInfo = document.createElement('div');
const img = document.createElement('img');
const card = document.createElement('div');

const contenedorCards = document.querySelector('.contenedor-cards');

card.classList.add('card');

img.src = 'img/hacer2.jpg';
img.setAttribute('alt','Img con JS');

divInfo.classList.add('info');

parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);

card.appendChild(img);
card.appendChild(divInfo);

contenedorCards.insertBefore(card,contenedorCards.children[0]);

console.log(card);