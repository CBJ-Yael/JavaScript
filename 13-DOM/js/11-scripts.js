const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('#footer');

btn.addEventListener('click',mostrarFooter);

function mostrarFooter(){
    if( footer.classList.contains('activo') ){
        console.log('esta activo');
        footer.classList.remove('activo');
        this.classList.remove('activo')
        this.textContent = 'Idioma y Moneda';
        return;
    }
    console.log('esta desactivada...');
    this.classList.add('activo')
    footer.classList.add('activo');
    this.textContent = 'Cerrar X';
}