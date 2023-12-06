const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true
}  

// AGREGAR MÁS PROPIEDADES AL OBJETO
producto.img = "imagen.jpg"; // primera forma

// ELIMINAR
delete producto.disponible // elimina el elemento del objeto

console.log(producto);