/* suscribir */
const suscribirClose = document.querySelector('.suscribir-close');
const suscribir = document.querySelector('.suscribir');
const vewSuscribir = document.querySelector('.vew-suscribir');

/*////////////////////////////////////////////////////////////// */


/*SUSCRIBIR*/
vewSuscribir.addEventListener('click', () => {
    suscribir.classList.toggle('active');

})

suscribirClose.addEventListener('click', () => {
    suscribir.classList.toggle('active');

})