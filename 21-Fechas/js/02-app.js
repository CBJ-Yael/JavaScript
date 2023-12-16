const diaHoy = new Date();

moment.locale('es'); // queremos las fechas en español

console.log( moment().format('MMMM D YYYY') );
console.log( moment().format('MMMM') ) // te da el mes
console.log( moment().format('D') ) // te da el dia
console.log( moment().format('YYYY') ) // te da el año

console.log( moment().format('h:mm:ss a') ) // te da la hora completa
console.log( moment().format('h') ) // te da la hora
console.log( moment().format('mm') ) // te da los minutos
console.log( moment().format('ss') ) // te da los segundos
console.log( moment().format('a') ) // te da p.m o a.m