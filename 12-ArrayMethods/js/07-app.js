const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre'];
const mesesExtra = ['Octubre','Noviembre','Diciembre'];


// . CONCAT 
const meses3 = meses.concat( meses2 ); // juntar 1
const resultadoFinal = meses.concat( meses2,mesesExtra ); // juntar dos arreglos


// SPREAD OPERATOR
const resultadoFinal2 = [...meses,...meses2]; // unir los dos arreglos
const resultadoFinal3 = [...meses,...meses2,...mesesExtra]; // unir maás de dos arreglos

console.table(meses3);
console.table(resultadoFinal);
console.table(resultadoFinal2);
console.table(resultadoFinal3);
