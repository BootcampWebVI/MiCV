import { openMenu } from './menu.js';
import { validateName, validateEmail, validatePhone, validateConocer, validateTextarea} from './form.js';
import { scrollSpy } from './scrollSpy.js'

// menu
var menu = document.querySelector('.menu-icon');

// links
var links = document.querySelectorAll('header .navigator ul li a')

// inputs
var inputName =  document.querySelector('#nombre');
var inputEmail = document.querySelector('#email');
var inputPhone = document.querySelector('#telf');

// textarea
var textarea = document.querySelector('#form textarea');

// select
var options = document.querySelector('#form select');

//------ events ------

menu.addEventListener('click', openMenu.bind(this));

inputName.addEventListener('change', validateName.bind(this));
inputEmail.addEventListener('change', validateEmail.bind(this));
inputPhone.addEventListener('change', validatePhone.bind(this));

options.addEventListener('click', validateConocer.bind(this));

textarea.addEventListener('keyup', validateTextarea.bind(this));

// ------ scroll-spy --------

window.addEventListener('scroll', scrollSpy.bind(this));