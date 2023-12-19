const selectYear = document.querySelector('#year');
const form = document.querySelector("#cotizar-seguro");
const resultado = form.querySelector('#resultado');

// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotizacion del seguro
Seguro.prototype.cotizacion = function(){
    /*
        1 = Amerciano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000

   switch (this.marca) {
    case '1':
        cantidad = base * 1.15
        break;
    case '2':
        cantidad = base * 1.05
        break;    
    case '3':
        cantidad = base * 1.35
        break;
    default: cantidad = 10000
        break;
   }

   // Leer el año actualizar la cantidad
   const diferencia = new Date().getFullYear() - this.year;
   cantidad -= ( (diferencia * 3) * cantidad) / 100;

   /*
    si el seguro es básico se multiplica por 30%
    si el seguro es básico se multiplica por 50%
   */

   if( this.tipo === "basico" ){
        cantidad *= 1.30;
   } else{
        cantidad *= 1.50;
   }

   return Math.ceil(cantidad);
}


function UI(){}

UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear();
    const min = max - 20;

    for( let i = max; i >= min; i-- ){
        const year = document.createElement('option');
        year.value = i;
        year.textContent = i;

        selectYear.appendChild(year);
    }
}

UI.prototype.mensaje = (msj,tipo) => {
    const revisarMensaje = form.querySelector('.mensaje');

    if( !revisarMensaje ){
        const div = document.createElement('div');
        div.classList.add('mensaje','mt-10');
        div.textContent = msj;
    
        if( tipo === "error" ){
            div.classList.add('error');
        }else{
            div.classList.add('correcto');
        }
    
        form.insertBefore(div,form.querySelector('#resultado')); // lo insertamos antes del resultado
    
        setTimeout(() => {
            div.remove();
        }, 2500);
    };
}

UI.prototype.mostrarResultado  = (seguro, total)=>{
    const validarMsjCotizacion = resultado.firstChild

    if(validarMsjCotizacion){ // revisa si existe un hijo
        resultado.removeChild(resultado.firstChild);
    }

    const {marca, year, tipo} = seguro;

    let tipoMarca

    switch (marca) {
        case '1':
            tipoMarca = 'Americano'
            break;
        case '2':
            tipoMarca = 'Asiatico'
            break;    
        case '3':
            tipoMarca = 'Europeo'
            break;
        default: tipoMarca = '¿Qué es esa madre?'
            break;
       }

    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${tipoMarca}</span> </p>
        <p class="font-bold">year: <span class="font-normal">${year}</span> </p>
        <p class="font-bold">tipo: <span class="font-normal">${tipo}</span> </p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span> </p>
    `;
    
    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = "block";
    
    setTimeout(() => {
        spinner.style.display = "none";
        resultado.appendChild(div);
    }, 2500);
}

// Lo instanciamos
const ui = new UI();


// llena las opciones de los años
document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones(); // llena el select con las opciones de los años
})

eventos();
function eventos(){
    form.addEventListener('submit',cotizarSeguro);
}


function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca');

    // Leer el año
    const yearValue = selectYear.value;

    // Tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked'); // el que esta seleccionado (:checked)

    if( marca.value === "" || yearValue === "" || tipo.value === "" ){
        ui.mensaje('Todos los campos son necesarios','error');
        return;
    }
    
    // Instanciar el seguro
    const seguro = new Seguro(marca.value,yearValue,tipo.value);
    const total = seguro.cotizacion();
    ui.mensaje('Cotizando...');
    
    // UI mostrar precio
    ui.mostrarResultado(seguro, total); // le pasamos el seguro para mostrar sus resultados
    

}