const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true
}

// DESTRUCTURING EN OBJETOS
const {nombre} = producto;

console.log(nombre);

// DESTRUCTUTRING EN ARRAYS
const numeros = [1,2,3,4,5];

const [pos1,pos2] = numeros; // rest operator
const [, , , a] = numeros; // accede al 4to valor sin asignar los otros valores
const [b,...aqui] = numeros; // Destructuring y crea una copia para agregarlo en un arreglo de todos los valores restantes

console.log(aqui);
