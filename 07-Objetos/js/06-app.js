const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China",
            year: 2022
        }
    }
}

// DESTRUCTURING
const {nombre,informacion,informacion:{fabricacion,fabricacion: {pais}}} = producto
console.log(fabricacion);
console.log(pais);
