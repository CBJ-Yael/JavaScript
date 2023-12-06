const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
}

// CAMBIAR VALOR EN UN OBJETO CONSTANTE (problema de los objetos)
producto.disponible = false

console.log(producto);
