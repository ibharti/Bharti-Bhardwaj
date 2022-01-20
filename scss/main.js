const menuBtn = document.querySelector('menu-btn');
const burgerBtn = document.querySelector('menu-btn__burger');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        burgerBtn.classList.add('open');
        showMenu = true;
    }
    else {
        burgerBtn.classList.remove('open');
        showMenu = false;
    }

}