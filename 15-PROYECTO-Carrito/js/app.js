// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

// Eventos
eventos();
function eventos(){
    listaCursos.addEventListener('click',agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
}

// Funciones
function agregarCurso(e){
    const elemento = e.target

    e.preventDefault();
    if( elemento.nodeName == 'A' && elemento.classList.contains('agregar-carrito') ){ // saber si la etiqueta es un enlace y si tiene esa clase
        console.log('agregando curso al carrito...');
        const elementoPadre = elemento.parentElement.parentElement // toda la información del div padre para acceder a los elementos
        curso(elementoPadre);
    }
}

// LEE el contenido del HTML
function curso(element){
    console.log(element);

    // Crear un objeto con el contenido del curso
    const contenido = {
        img: element.querySelector('img').src,
        titulo: element.querySelector('h4').textContent,
        precio: element.querySelector('.precio span').textContent,
        id: element.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // aumentar la cantidad si el elemento ya existe
    const existe = articulosCarrito.some( curso => curso.id === contenido.id ) // retorna true o false
    if( existe ){
        // ACTUALIZAMOS LA CANTIDAD
        articulosCarrito = articulosCarrito.map( obj => {
            if( obj.id === contenido.id ){
                obj.cantidad++;
            }
            return obj;
        })
    } else{
        // Agregar elementos al arreglo
        articulosCarrito = [...articulosCarrito,contenido];
    }

    carritoHtml();
}

function eliminarCurso(e){
    const element = e.target
    if(element.classList.contains('borrar-curso')){ 
        const id = element.getAttribute('data-id');
        // Elimina el arreglo
        articulosCarrito = articulosCarrito.filter(curso =>{
            if( curso.id === id ){
                if( curso.cantidad > 1 ){
                    curso.cantidad--;
                    return curso
                }
            }
            return curso.id !== id;
        });
        carritoHtml(); // itera sobre el carrito y mostrar su HTML
    }
}

function carritoHtml(){
    // Limpiar el HTML
    limpiarHmtl();

    articulosCarrito.forEach( arcticulo =>{
        const { img,titulo,precio,cantidad,id } = arcticulo;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src=${img} alt="Imagen Curso" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `
        // Agregamos elemento al HTML
        contenedorCarrito.appendChild(row);
    });
}

function vaciarCarrito(){
    articulosCarrito = []; // se reinicia el arreglo
    limpiarHmtl(); // eliminamos el HTML
}

function limpiarHmtl(){
    while( contenedorCarrito.firstChild ){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
