let menuResponsive = document.querySelector('#navigator-responsive');
let menuIcon = document.querySelector('.menu-icon');
let header = document.querySelector('#home');

let closeMenuFunction = closeMenu.bind(this);
header.addEventListener('click', closeMenuFunction, true);

export function openMenu(){
    menuIcon.style.display = 'none';
    menuResponsive.classList.toggle('opened');
    header.removeEventListener('click', closeMenuFunction);
}

function closeMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('cerrar menu icon')
    menuIcon.style.display = 'block';
    menuResponsive.classList.toggle('opened');
}