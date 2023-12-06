const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto);  
console.log(medidas);

// JUNTAR DOS OBJETOS
const resultado = Object.assign(producto,medidas); // junta los objetos y lo asigna a uno (cambia el valor de los objetos)
console.log(resultado);

// SPREAD OPERATOR O REST OPERATOR
const resultado2 = { ...producto, ...medidas }; // copia los objetos
console.log(resultado2);
