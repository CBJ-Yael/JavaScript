const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseenter', ()=>{ // detecta cuando el mouse esta encima
    console.log('enter en nav');
    nav.style.backgroundColor = 'white';
});
nav.addEventListener('mouseout', ()=>{ // detecta cuando el mouse salio
    console.log('saliendo de nav');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', ()=>{ // cuando das click
    console.log('presionado...');
});
nav.addEventListener('mouseup', ()=>{ // detecta cuando el mouse dejo de presionar
    console.log('dejaste de presionar');
})

nav.addEventListener('dblclick',()=>{ // detecta cuando diste doble click
    console.log('diste doble click');
})