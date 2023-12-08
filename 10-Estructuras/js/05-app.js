// SWUICTH CASE

const metodoDePago = 'efectivo';

switch(metodoDePago){
    case 'efectivo':
        pagar();
        break;
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    default: 
        console.log('Aún no tienes seleccionado el metodo de pago o metodo de pago no soportado');
        break;
}

function pagar(){
    console.log('Pagando...');
}
