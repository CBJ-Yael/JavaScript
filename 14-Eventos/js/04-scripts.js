const form = document.querySelector('#formulario');

form.addEventListener('submit',validarFormulario);


function validarFormulario(e){
    e.preventDefault();

    console.log('consultar una API');

    console.log(e.target.method); // te dice el tipo de peticion HTTP
    console.log(e.target.action); // te dice hacia donde va ese formulario
}
