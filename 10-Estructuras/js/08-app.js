const autenticado = true

if(autenticado){
    console.log("Esta verificado");
} else{
    console.log('Usuario no verificado');
}

const dinero = 500

const revisarDinero = ()=>{
    if( dinero >= 100 ){
        console.log("Paso tu tarjeta!");
        return;
    }
    console.log('Saldo insuficiente!');
}

revisarDinero()
