const persona = {
    name : "Yael",
    edad: 20,
    trabajo: 'programador',
    pais: 'México'
}

// itera sobre objetos
for( let dato in persona ){
    console.log(dato); // nos muestra la llave
    console.log('========================');
    console.log(`${persona[dato]}`); // muestra el valor
}

// FOR para objetos (mejorado)
for( let [llave,valor] of Object.entries(persona) ){
    console.log(valor);
}
