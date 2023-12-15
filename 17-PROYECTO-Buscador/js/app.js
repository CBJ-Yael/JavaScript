// Variables
const marca = document.querySelector('#marca');
const years = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultados = document.querySelector('#resultado');

const yearMax = new Date().getFullYear(); // te da el año actual
const yaerMin = yearMax - 10;

// Generar un Objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos); // muestra los autis

    selectYear(); // genera los años del select
});

marca.addEventListener('change',buscar) // detecta cuando se cambia el valor de un select
years.addEventListener('change',buscar)
minimo.addEventListener('change',buscar)
maximo.addEventListener('change',buscar)
puertas.addEventListener('change',buscar)
transmision.addEventListener('change',buscar)
color.addEventListener('change',buscar)

// Funciones
function mostrarAutos(array){
    limpiarHtml();

    array.forEach( auto =>{
        const autoHTML = document.createElement('p'); 
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;

        autoHTML.textContent = `
        ${marca}
        ${modelo} - 
        ${year} - 
        ${puertas} puertas -
        transmision: ${transmision} -
        precio: $${precio} -
        Color: ${color} -
          `;
        resultados.appendChild(autoHTML);
    });

    if( array.length <=0 ){
        alerta();
    }
}

function alerta(){
    const autoHTML = document.createElement('p'); 
    autoHTML.textContent = "No hay resultados, intenta con otros terminos de busqueda";
    autoHTML.classList.add('alerta','error');
    resultados.appendChild(autoHTML);
}

function selectYear(){
    for( let i = yearMax; i >= yaerMin; i-- ){
        const yearOption = document.createElement('option');
        yearOption.textContent = i;
        yearOption.value = i;

        years.appendChild(yearOption); // agrega las opciones de años
    }
}

function buscar(e){
    const elemento = e.target;
    let busquedaResultado

    if( parseInt(elemento.value) ){
        busquedaResultado = parseInt(elemento.value);
    } else{
        busquedaResultado = elemento.value
    }
    datosBusqueda[e.target.id] = busquedaResultado;

    filtrarAuto();
}

function filtrarAuto(){
    // el value se pasa por automatico a la funcion que se llama (los filters soportan encadenamiento)
    //los filters reciben funciones de alto nivel
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor )

    mostrarAutos(resultado);
};

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }

    return auto
}
function filtrarYear(auto){
    const { year } = datosBusqueda;
    if(year ){
        return auto.year === year;
    }
    return auto
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto.precio;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto.precio;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto.puertas;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto.transmision;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto.color;
}


function limpiarHtml(){
    while( resultados.firstChild ){
        resultados.removeChild(resultados.firstChild);
    }
}