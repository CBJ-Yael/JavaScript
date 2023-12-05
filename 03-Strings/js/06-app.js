const producto = 'Monitor de 20 pulgadas'

// REPETIR UNA CADENA DE TEXTO
const texto = " En promocion".repeat(3); // retorna el texto 3 veces
console.log(texto);
console.log(`${producto} ${texto} !!!`);

const texto2 = "Holaxd".repeat(2.4); // lo redondea
console.log(texto2);


// DIVIDIR UN STRING
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(' ')); // divide la cadena de texto por espacios y regresa un arreglo

const hobbies = 'Leer, escuchar música, aprender a programar';
console.log(hobbies.split(', '));

const tweet = "Aprendiendo JavaScript Moderno #JavaSctiptModerno";
console.log(`#${tweet.split('#')[1]}`);
