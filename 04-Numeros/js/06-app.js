const num1 = "30";
const num2 = "33.3";
const num3 = "Uno";
const num4 = 30;

console.log(  typeof num1) // te dice el tipo de valor

// CAMBIA STRING A NUMERO (ENTERO) SI ES POSIBLE
console.log(Number.parseInt(num1));
console.log(Number.parseInt(num2));
console.log(Number.parseInt(num3)); // retorna NaN (NaN = Not At Number)

// CAMBIA DE STRING A NUMERO (COMO ESTA) SI ES POSIBLE
console.log( Number.parseFloat(num2) );

// REVISAR SI UN NÚMERO ES ENTERO O NO
console.log(Number.isInteger(num4)) // regresa si es entero o no (true o false)