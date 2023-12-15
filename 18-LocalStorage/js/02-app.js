console.log( localStorage.getItem('nombre') ); // agregas la llave y te devuelve el valor (si no existe retorna null)

const productoJson = localStorage.getItem('producto');
// Lo destransformamos de nuevo.
const productoObj = JSON.parse( productoJson );

