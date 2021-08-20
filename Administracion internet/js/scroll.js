/*********************************************
                TODO EL NAV
********************************************/

const spick = document.querySelector('.spick');
const listaNav = document.querySelector('ul.row');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        spick.classList.add('scroll');
        logo.classList.add('logo-scroll');
    } else {
        spick.classList.remove('scroll');
        logo.classList.remove('logo-scroll');
    }
})