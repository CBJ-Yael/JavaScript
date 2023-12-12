// ELIMINAR ELEMENTOS DEL DOM

// const enlace = document.querySelector('a');
// console.log(enlace);
// enlace.remove(); // elimina el elemento

// ELIMINAR DESDE EL PADRE
const navegacion = document.querySelector('nav');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);