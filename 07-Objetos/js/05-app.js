const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
    informacion: {
        meiddas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China",
            year: 2022
        }
    }
}

console.log(producto);

// ACCEDER
console.log(producto.informacion);

console.log(producto.informacion.fabricacion.pais);
