const diaHoy = new Date(); // la fecha actual

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear(); // el año actual
valor = diaHoy.getMonth(); //los meses (Enero es el mes 0)
valor = diaHoy.getMinutes(); // los minutos
valor = diaHoy.getHours(); // la hora actual
valor = diaHoy.getTime(); // los milisegundos

// .get te da el valor de las fechas y .set las modifica
valor = diaHoy.setFullYear(2000);
console.log(diaHoy); // te muestra la fecha modifcada

console.log(Date.now()) // otra forma de traer los milisegundos

console.log(valor);
