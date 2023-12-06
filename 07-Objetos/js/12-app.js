// OBJECT LITERAL
const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true
}

// OBJECT CONSTRUCTOR
function Producto(name,precio){
    // el this no pierde la referencia del objeto
    this.name = name;
    this.precio = precio;
    this.disponible = true;

}

const producto2 = new Producto("Celular",400);
console.log(producto2);

const producto3 = new Producto("Teclado",50);
console.log(producto3);
