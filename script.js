const navBar = document.querySelector('.navBar');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', ()=>{
    navBar.classList.toggle('showMenu')
});