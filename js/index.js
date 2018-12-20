import { openMenu } from './menu.js';
import { validateForm } from './form.js';

var menu = document.querySelector('.menu-icon');
var inputs =  document.querySelectorAll('#form input');
var textarea = document.querySelector('#form textarea');
var options = document.querySelector('#form select')

menu.addEventListener('click', openMenu.bind(this));

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm.bind(this));
});

options.addEventListener('click', validateForm.bind(this));

textarea.addEventListener('keyup', validateForm.bind(this));


