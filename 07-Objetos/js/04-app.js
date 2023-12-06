const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true
}  

// EXTRAER LA VARIABLE 
const a = producto.nombre // primera forma
console.log(a);

// DESTRUCTURING
const {nombre,precio} = producto;
console.log(nombre);
console.log(precio);