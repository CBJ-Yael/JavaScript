// FOR EACH

let numeros = [1, 2, 3, 4, 5];
numeros.forEach( (num,index) => console.log({num,index}) );

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
];
personas.forEach( (persona,index) => console.log(persona.nombre) );

// .map
let personas2 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
];

const array = personas2.map( (persona,index) => persona );

console.log(array);
