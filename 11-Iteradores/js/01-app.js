
// FOOR LOOP
for( let i = 1; i <=20; i++ ){
    if( i % 2 == 0 ){
        console.log(`Es par ${i}`);
    } else{
        console.log(`El número ${i} es impar`);
    }
}


const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Juan', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'María', edad: 28, ciudad: 'Sevilla' },
    { nombre: 'Carlos', edad: 22, ciudad: 'Valencia' }
  ];

for( let i = 0; i < personas.length; i++ ){
    console.log("===============================================");
    console.log(personas[i].nombre);
    console.log(personas[i].edad);
    console.log(personas[i].ciudad);
}
