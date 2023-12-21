// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventos()
function eventos(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}

// Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(obj){
        const {nombre, cantidad, id} = obj;

        this.gastos = [...this.gastos, obj];
        
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );

        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
    }
}

class UI{
    insertarPresupuesto(cantidad){
        const { presupuesto, restante } = cantidad; // extraer value

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    alerta(mensaje, tipo){
        const existeMensaje = document.querySelector('#error-mensaje');

        if( existeMensaje ){
            existeMensaje.remove();
        }
        const div = document.createElement('div');
        div.textContent = mensaje;
        div.classList.add('alert','text-center');
        div.id = 'error-mensaje';

        if( tipo === "error" ){
            div.classList.add('alert-danger');
        }else{
            div.classList.add('alert-success');
        }

        // Instermaos en el html antes del formulario
        document.querySelector('.primario').insertBefore(div,formulario);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    agregarGastoLista(gastos){
        this.limpiarHTML(); // borramos el HTML de los listados
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            const nuevoLiGasto = document.createElement('li');
            nuevoLiGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoLiGasto.setAttribute('data-id',id); // agregamos el data id como el id
            // nuevoLiGasto.dataset.id = id;   // agrega el mismo atributo como el set            

            nuevoLiGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            // Button
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';

            btnBorrar.onclick = () =>{
                eliminarGasto(id)
            }

            nuevoLiGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoLiGasto);
        });
    }

    actualizarRestante(restante){
        console.log(restante);
        document.querySelector('#restante').textContent = restante;
    }

    ComprobarRestante(obj){
        const {presupuesto, restante} = obj;

        const restanteHtml = document.querySelector('#presupuesto .restante');

        // Comprobar 50%
        if( (presupuesto / 4) >= restante ){
            restanteHtml.classList.remove('alert-succes','alert-warning');
            restanteHtml.classList.add('alert-danger');
        } else if( (presupuesto / 2) >= restante ){
            restanteHtml.classList.remove('alert-succes','alert-danger');
            restanteHtml.classList.add('alert-warning');
        } else{
            restanteHtml.classList.remove('alert-warning','alert-danger');
            restanteHtml.classList.add('alert-succes');
        }

        if( restante <= 0 ){
            this.alerta('Se agoto el presupuesto!','error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    limpiarHTML(){
        while( gastoListado.firstChild ){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

}

// Instancias
let presupuesto;
const ui = new UI();


// Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = Number(prompt('Cual es tu presupuesto'));

    // Validaciones
    if( presupuestoUsuario === '' || !presupuestoUsuario || presupuestoUsuario <= 0){
        window.location.reload(); // recarga la página
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar 
    if( nombre === "" || cantidad === "" ){
        ui.alerta('Todos los campos son obligatorios','error');
        return
    } else if( cantidad <=0 || !cantidad ){
        ui.alerta('La cantidad no es valida','error');
        return;
    }

    // generar un obj con el gasto
    const gasto = { nombre, cantidad,id: Date.now() };
    
    presupuesto.nuevoGasto(gasto);
    
    ui.alerta('Gasto agregado correctamente'); // mensaje
    formulario.reset(); // reiniciamos el formulario

    // Imprimir loas gastos
    const {gastos, restante} = presupuesto; // extraer el arreglo de los gastos de la clase de presupuesto
    
    ui.actualizarRestante(restante);

    ui.agregarGastoLista(gastos);

    ui.ComprobarRestante(presupuesto);
}

function eliminarGasto(id){
    // Elimina los gastos del arreglo
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    ui.agregarGastoLista(presupuesto.gastos);


    ui.actualizarRestante(presupuesto.restante);
    ui.ComprobarRestante(presupuesto);
}