"Use strict"; // modo estricto

const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
}

// SELLA EL OBJETO PARA EVITAR QUE SEA MODIFICIADO
Object.seal(producto);

producto.disponible = false // si se pueden modificar las existentes
delete producto.nombre;
producto.img = "Imagen.jpg";

console.log(producto);

// SABER SI ESTA SELLADO
console.log(Object.isSealed(producto)); // retorna true o false