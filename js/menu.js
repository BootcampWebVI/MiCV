let menuResponsive = document.querySelector('#navigator-responsive');
let menuIcon = document.querySelector('.menu-icon');
let header = document.querySelector('#home');

let closeMenuFunction = closeMenu.bind(this);
header.addEventListener('click', closeMenuFunction, true);

export function openMenu(){
    menuIcon.style.display = 'none';
    menuResponsive.classList.toggle('opened');
}

function closeMenu(event) {
    event.stopPropagation();
    menuIcon.style.display = 'block';
    menuResponsive.classList.toggle('opened');
}