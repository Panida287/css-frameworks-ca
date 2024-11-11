import './src/css/styles.css'

const btn = document.getElementById('hamburger-icon');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', ()=> {
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})