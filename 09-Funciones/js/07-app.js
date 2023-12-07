
iniciarApp();

function iniciarApp(){
    console.log('Iniciando...');
    
    segundaFuncion();
}

function segundaFuncion(){
    console.log( 'desde la segunda funcion' );
    
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(user){
    console.log('Autenticando usuario...espere...');
    console.log(`Usuario autenticado correctamente: ${user}`);
}
