"Use strict"; // modo estricto

const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
}

// CONGELAR UN OBJETO
Object.freeze( producto ); // evita que sea modificado

// SABER SI UN OBJ ESTA CONGELADO
console.log( Object.isFrozen(producto) ); // te retorna true o false

producto.disponible = false
producto.imagen = "img.jpg";

console.log(producto);
