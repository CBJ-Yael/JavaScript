// MODIFICAR TEXTO

const titulo = document.querySelector('.contenido-hero h1');
console.log(titulo);

// SELECTORES
console.log(titulo.innerText); // no encuentra un texto que este oculto con hidden
console.log(titulo.textContent); // si lo encuentra
console.log(titulo.innerHTML); // se trae las etiquetas html como el span

titulo.textContent = 'Nuevo Heading';


// MODIFICAR IMAGEN
const img = document.querySelector('.card img');
console.log(img);

// Modificar la imagen
img.src = "img/hacer2.jpg";
