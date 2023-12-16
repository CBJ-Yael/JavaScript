// Variables
const formulario = document.querySelector('#formulario');
const tweetsHtml = document.querySelector('#lista-tweets');
let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

// Eventos
eventos();
function eventos(){
    formulario.addEventListener('submit', agregarTweet);
    
    document.addEventListener('DOMContentLoaded',agregarTweetsHtml);
}

// Funciones
function agregarTweet(e){
    e.preventDefault();

    // lo que el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    if( tweet.trim() === '' ){
        mensajeError('El texto no puede ir vacio');
        return;
    }

    // Agregar tweet

    const tweetObj = {
        tweet,
        id: new Date().getTime()
    }
    tweets = [...tweets,tweetObj];

    // Reinicia el formulario
    formulario.reset()

    // Almacenamos el array en localstorage
    localStorage.setItem( 'tweets',JSON.stringify(tweets) );

    agregarTweetsHtml();
}

function agregarTweetsHtml(){
    // Limpiamos el html
    limpiarHtml();

    tweets.forEach( msj =>{
        // btrn eliminar
        const btn = document.createElement('a');
        btn.classList.add('borrar-tweet');
        btn.innerHTML = "X";

        // Añadir la funcion de eliminar
        btn.addEventListener('click',()=>{
            tweets = tweets.filter( tweet => tweet.id !== msj.id );
            console.log(tweets);
            almacenarStorage('tweets',tweets);
            agregarTweetsHtml();
        });

        const twt = document.createElement('li');
        console.log( tweets );
        twt.innerHTML = msj.tweet;

        // Asignar el btn de eliminar
        twt.appendChild(btn);

        // Lo agregamos en el html
        tweetsHtml.appendChild(twt);
    });
}

function almacenarStorage(llave,value){
    localStorage.setItem(llave,JSON.stringify(value));
}

function limpiarHtml(){
    while( tweetsHtml.firstChild ){
        tweetsHtml.removeChild(tweetsHtml.firstChild);
    }
}

function mensajeError(mensaje){
    const contenido = document.querySelector('#contenido');
    const validar = contenido.querySelector('.error')

    if(!validar){
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('error');
    
        // Insterar en el contenido
        contenido.appendChild(error);
    
        setTimeout( ()=>{
            error.remove();
        },3000);
    }
}
