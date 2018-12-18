import { openMenu } from './menu.js';
import { validateForm, submitForm } from './form.js';

var menu = document.querySelector('.menu-icon');
var submitButton = document.querySelector('input[type="submit"]');

menu.addEventListener('click', openMenu.bind(this));
submitButton.addEventListener('click', submitForm.bind(this));

// if(validateForm()){
//     submitButton.setAttribute('disabled', false);
//     submitButton.addEventListener('click', submitForm.bind(this));
// }
