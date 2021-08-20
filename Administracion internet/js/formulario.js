/*SUSCRIBIR FOOTER */
const btnSuscribir = document.querySelector('.btn-enviar');
const removesuscribir = document.querySelector('.suscribir');
const messajeEnvio = document.querySelector('.messaje-envio');
const messaje = document.querySelector('.messaje');

btnSuscribir.addEventListener('click', (e) => {
    validarFormulario();

})

/*beckbox */
function beckbox() {
    if (messajeEnvio.classList.contains('messaje-envio'))
        console.log('hola')
    messajeEnvio.classList.add('active');
    messaje.classList.add('active');
    setTimeout(function() {
        messajeEnvio.classList.remove('active');
        messaje.classList.remove('active');
        removesuscribir.classList.remove('active');

    }, 2000);
}
/*validar formulario checkbox*/
const mesajeError = document.querySelector('.mesaje-error')

function validarFormulario() {
    const nombre = document.querySelector('.suscribir-name').value;
    const email = document.querySelector('.suscribir-email').value

    if (nombre.length == 0 || email.length == 0) {
        mesajeError.innerHTML = '<p> Los campos deben ser llenado correcatmente <p>'
        console.log(nombre);
        setTimeout(function() {
            mesajeError.innerHTML = '';
        }, 3000)
    } else if (nombre.length > 1 || email.length > 1) {
        nombre.value = null
        email.value = null;
        beckbox();
    }



}