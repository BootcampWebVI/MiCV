let menuResponsive = document.querySelector('#navigator-responsive');
let menuResponsiveLinks = document.querySelectorAll('#navigator-responsive ul li');
let menuIcon = document.querySelector('.menu-icon');

let closeMenuFunction = closeMenu.bind(this);
menuResponsive.addEventListener('click', closeMenuFunction);
menuResponsiveLinks.forEach((link) => {
    link.addEventListener('click', closeMenuFunction);
});

export function openMenu(){
    console.log('open')
    menuIcon.style.display = 'none';
    menuResponsive.classList.toggle('opened');
}

function closeMenu(e) {
    e.stopPropagation();
    menuIcon.style.display = 'block';
    menuResponsive.classList.toggle('opened');
}


