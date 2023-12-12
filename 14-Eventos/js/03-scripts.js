
const busqueda = document.querySelector('.busqueda');


busqueda.addEventListener('keydown',()=>{ // detecta cuando escribes
    console.log('escribiendo');
});
busqueda.addEventListener('keyup',()=>{ // detecta cuando sueltas la tecla
    console.log('soltaste la tecla');
});
busqueda.addEventListener('blur', ()=>{ // detecta cuando saliste de escribir
    console.log('saliste de escribiendo...');
});
busqueda.addEventListener('copy', ()=>{ // detectar cuando copia al portapapeles
    console.log('copiando texto');
});
busqueda.addEventListener('paste', ()=>{ // detectar cuando pega
    console.log('copiando texto');
});
busqueda.addEventListener('cut', ()=>{ // detectar cuando cortas
    console.log('copiando texto');
});
busqueda.addEventListener('input', (e)=>{ // detecta todos los anteriores
    console.log('input');
    // console.log(e.type); // sobre que evento estas trabajando
    console.log(e.target.value); // te dice lo que el user esta escribiendo
});
