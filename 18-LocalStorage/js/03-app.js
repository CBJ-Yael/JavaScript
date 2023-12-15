
// Borra el Item con esa llave
localStorage.removeItem('nombre');


// Actualizar registro
const mesesArray = JSON.parse( localStorage.getItem('meses') );
mesesArray.push('nuevoMes'); // agregamos un nuevo valor
console.log( mesesArray );

localStorage.setItem( 'meses',JSON.stringify(mesesArray) ); // lo actualiza con el nuevo mes

// Borra todo de localStorage
// localStorage.clear()