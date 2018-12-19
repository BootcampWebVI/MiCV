import { openMenu } from './menu.js';
import { validateForm } from './form.js';

var menu = document.querySelector('.menu-icon');
var inputs =  document.querySelectorAll('#form input');
var options = document.querySelectorAll('#form select option')

menu.addEventListener('click', openMenu.bind(this));

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm.bind(this));
});

options.forEach((option) => {
    option.addEventListener('click', validateForm.bind(this));
});


