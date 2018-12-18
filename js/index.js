import { openMenu } from './menu.js';
import { validateForm, submitForm } from './form.js';
// import { smoothScroll } from './scroll.js'

var menu = document.querySelector('.menu-icon');
var submitButton = document.querySelector('input[type="submit"]');
// var links = document.querySelectorAll('#home ul li');

menu.addEventListener('click', openMenu.bind(this));
submitButton.addEventListener('click', submitForm.bind(this));

// add smooth scroll
// links.forEach((link) => {
//     link.addEventListener('click', smoothScroll.bind(this));
// });



// if(validateForm()){
//     submitButton.setAttribute('disabled', false);
//     submitButton.addEventListener('click', submitForm.bind(this));
// }
