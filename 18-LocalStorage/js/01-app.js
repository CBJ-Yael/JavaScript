localStorage.setItem('nombre','Yael'); // solo almacena strings

const producto = {
    name: "television 50 pulgadas",
    precio: 500
}

const productoString = JSON.stringify( producto ) // almacena el objeto en string
// Guardarlo en local storage
localStorage.setItem('producto',productoString);


const meses = ['Enero','Febrero','Marzo'];
const mesesArray = JSON.stringify(meses);

localStorage.setItem('meses',mesesArray);



// Session storage
// sessionStorage.setItem('nombre','Yael');