
let nombre = "A";
let precio = 20;

const producto = {
    nombre : "Monitor de 20 pulgadas", // Propiedad o llave del objeto
    precio : 500,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`) // el this accede a los valores del objeto, si no tuviera eso se va a las varaibles de fuera
    }
}

const producto2 = {
    nombre : "PC Gamer", // Propiedad o llave del objeto
    precio : 800,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`) // el this accede a los valores del objeto, si no tuviera eso se va a las varaibles de fuera
    }
}

// LLAMA A LA FUNCION DENTRO EDL OBJETO
producto.mostrarInfo();
producto2.mostrarInfo();
