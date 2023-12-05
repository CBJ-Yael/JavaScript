const producto = 'Monitor de 20 pulgadas'

console.log(producto);

// REMPLAZAR TEXTO
console.log(producto.replace('pulgadas','"')) // primer parametro el valor que vas a remplazar y el segundo por cual vas a remplazar
console.log(producto.replace('Monitor','Monitor Curvo de 24 pulgadas'));

// CORTAR UNA PARTE DEL STRING
console.log(producto.slice(0,8)); // el primer parametro es donde inicia y el segundo donde finaliza de cortar
console.log(producto.slice(8)); // borra desde el inicio (8) hasta el final
console.log(producto.slice(2,1)) // No funciona

// ALTERNATIVA A SLICE
console.log(producto.substring(0,10)); // donde inicia y donde finalizaz de cortar
console.log(producto.substring(2,1)); // Si funciona y substring cambia el valor si el prinmero es más grande

// CORTA LA PRIMER LETRA
const user = "Jorge Yael"
console.log(user.charAt(0)); // retorna la primer letra
console.log(user.substring(0,1));

