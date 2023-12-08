// FOOR LOOP (CONTINUE Y BREAK)

for( let i = 1; i <=20; i++ ){
    if( i === 5 ){
        console.log(`Es número ${i}`);
        break;
    }
    console.log(`no es número ${i}`);
}

console.log(`========================================`);

for( let i = 1; i <=10; i++ ){
    if( i === 5 ){
        console.log(`CINCO`);
        continue; // para le ejecución de ese momento y sigue con el codigo
    }
    console.log(`no es número ${i}`);
}

console.log(`========================================`);

const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Juan', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'María', edad: 28, ciudad: 'Sevilla',vacaciones: true },
    { nombre: 'Carlos', edad: 22, ciudad: 'Valencia'}
];

for( let i = 0; i < personas.length; i++ ){
    if( personas[i].vacaciones ){
        console.log(`${personas[i].nombre} esta de vacaciones`);
        continue;
    }
    console.log(`${personas[i].nombre} esta laborando`);
}


