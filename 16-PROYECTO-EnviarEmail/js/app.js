document.addEventListener('DOMContentLoaded', ()=>{

    const email = {
        email: '',
        asunto:'',
        mensaje:'',
    }

    let cc = true;

    // Seleccionar elementos de la UI
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('#botones button');
    const form = document.querySelector('#formulario');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    const tareaCC = document.querySelector('#cc');

    // Asignar eventos
    inputEmail.addEventListener('input',validar);
    inputAsunto.addEventListener('input',validar);
    inputMensaje.addEventListener('input',validar);

    tareaCC.addEventListener('input',validar);

    form.addEventListener('submit',enviarEmail);

    btnReset.addEventListener('click', (e)=>{
        e.preventDefault(); // previene que reinicie el fomulario

        reiniciarForm();
    })

    function reiniciarForm(){
        form.reset(); // reinicia el formulario

        for( obj in email ){
            email[obj] = '';
        }
        comprobarEmail();
    }

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex')
        spinner.classList.remove('hidden');

        setTimeout(()=>{
            spinner.classList.remove('flex')
            spinner.classList.add('hidden');
            reiniciarForm();

            // Crear alerta de exito
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase');
            alertaExito.textContent = 'Enviado correctamente!';
            form.appendChild(alertaExito);

            setTimeout( ()=>{
                alertaExito.remove();
            },3000)

        },2000);
    }

    function validar(e){
        const elemento = e.target;

        if( elemento.value.trim() === '' && elemento !== tareaCC ){ // trim quita los espacios
            email[elemento.name] = ''
            comprobarEmail();
                mostrarAlerta(`El campo ${e.target.id} no puede ir vacio`,elemento.parentElement);
                return;
        }
        if( elemento.value.trim().length < 4 && elemento !== tareaCC ){
            email[elemento.name] = ''
            comprobarEmail();
                mostrarAlerta(`${e.target.id} es demasiado corto!`,elemento.parentElement);
                return;
        }
        
        if( !validarEmail(elemento.value) && elemento.id === "email" ){
            email[elemento.name] = ''
            comprobarEmail();
            mostrarAlerta("No parece un email",elemento.parentElement);
            return;
        }

        if( elemento === tareaCC && elemento.value.length > 0 && !validarEmail(elemento.value)){
            mostrarAlerta("No parece un email",elemento.parentElement);
            cc = false
            comprobarEmail();
            return;
        }

        cc = true;

        limpiarAlert(elemento.parentElement);

        // Asignar valores
        if( elemento !== tareaCC ){
            email[elemento.name] = elemento.value.trim().toLowerCase();
            console.log('no es igual');
        }

        // Comprobar el obj de email
        comprobarEmail();
    };

    function mostrarAlerta(mensaje,padre){
        limpiarAlert(padre);

        // generar alerta de HTML
        const error = document.createElement('DIV');
        error.textContent = mensaje;

        // Clases
        error.classList.add('p-2','text-center','bg-red-600','text-white','alerta');
        
        // inyectar el error al formulario
        padre.appendChild(error);
    }

    function limpiarAlert(padre){
        const validar = padre.querySelector('.alerta');
        if( validar ){
            validar.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // expresion regular
        const resultado = regex.test(email) // se le pasa lo que quierees comprobar (false o ture)
        return resultado;
    }

    function comprobarEmail(){
        if( !Object.values(email).includes('') && cc ){ // retorna el valor deo obj en un arreglo y luego verifica si es un string vacio (false o true)
            btnEnviar.classList.remove('opacity-50');
            btnEnviar.disabled = false;
        } else{
            btnEnviar.classList.add('opacity-50');
            btnEnviar.disabled = true;
        }
    }

});
