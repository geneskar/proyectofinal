const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');


toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('active')
    nav.classList.toggle('active')

})

nav.addEventListener('click', (e) => {
    nav.classList.remove('active')
    toggle.classList.remove('active')

})