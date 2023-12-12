window.addEventListener('scroll', (e)=>{
    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect(); // nos da a que distancia se encuentra de esa seccion
    console.log(ubicacion);

    if( ubicacion.top < 750 && ubicacion.top > -250 ){
        console.log('elemento visible');
    } else{
        console.log('No visible');
    }
});
