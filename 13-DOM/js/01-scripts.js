let elemento;

elemento = document; // todo el html
elemento = document.all; // todos los elementos que conforman el HTML
elemento = document.head;
elemento = document.body;
elemento = document.domain; // el dominio actual de tu página

elemento = document.forms; // cuantos formularios hay
elemento = document.forms[0]; // form en esa posición
elemento = document.forms[0].id; // el id del formulario
elemento = document.forms[0].classList; // las clases que tiene el arreglo
elemento = document.forms[0].action; // el buscador

elemento = document.links; // todos los enlaces
elemento = document.links[4]; // en la posicion
elemento = document.links[4].classList; // sus clases (DOM tokenList que es parecido a un arreglo)
elemento = document.links[4].className; // sus clases (en string)

elemento = document.images; // saber todas las imagenes

elemento = document.scripts; // todos los scripts


console.log( elemento );