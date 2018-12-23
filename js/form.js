let form = document.querySelector('#contacto .content-wrapper');
let confirmation = document.querySelector('#contacto .confirmation-wrapper');

let name = '';
let email = '';
let conocer = '';
let otros = '';
let phone = '';
let extraInfo = '';

let otrosText = '';

var nameValidate = false;
let emailValidate = false;
let phoneValidate = false
let otrosValidate = false;
let textareaValidate = false;

let submitButton = document.querySelector('input[type="submit"]');

function validateForm(){

    conocer = document.querySelector('#conocer');
    extraInfo = document.querySelector('#form textarea');

    if(nameValidate && emailValidate && phoneValidate){
        if((conocer.value === 'Otros' && otrosValidate) || conocer.value !== 'Otros'){
            if((extraInfo.value !== '' && textareaValidate) || extraInfo.value === ''){
                activeButton();
            } else {
                disableButton();
            }
        } else {
            disableButton();
        }
    } else {
        disableButton();
    }
    
}

export function validateName(e){
    name = document.querySelector('#nombre');

    if(name.value !== '' && e.target.validity.valid){
        nameValidate = true;
    } else {
        nameValidate = false;
    }

    validateForm();
}

export function validateEmail(e){
    email = document.querySelector('#email');

    if (email.value !== '' && e.target.validity.valid){
        emailValidate = true;
    } else {
        emailValidate = false;
    }

    validateForm();
}

export function validateConocer(e){
    conocer = document.querySelector('#conocer');
    otros = document.querySelector('#otros');

    if (conocer.value !== ' ' ){
        if (conocer.value === 'Otros') {
            otros.style.display = 'block';
            otros.addEventListener('keyup', validateOtros.bind(this));
        } else {
            otros.style.display = 'none';
        }

        validateForm();
    }

}

export function validatePhone(e){
    phone = document.querySelector('#telf');

    if (phone.value !== '' && e.target.validity.valid){
        phoneValidate = true;
    } else{
        phoneValidate = false;
    }
    validateForm();
}

export function validateTextarea(){
    let wordCounter = 0;
    let counterText = document.getElementById('counter');
    if (extraInfo.value !== '') {
        wordCounter = extraInfo.value.trim().split(' ').length;
        counterText.innerHTML = `<p>Te quedan ${150 - wordCounter} palabras</p>`;
        if (wordCounter <= 150) {
            textareaValidate = true;
            
        } else {
            textareaValidate = false;
        }
    } else {
        wordCounter = 0;
        counterText.innerHTML = `<p>Te quedan 150 palabras</p>`;
    }

    validateForm();
}

function validateOtros(){
    otrosText = otros.value;
    if (otrosText !== '') {
        otrosValidate = true;
    } else {
        otrosValidate = false;
    }
    
    validateForm();
}

function disableButton(){
    submitButton.setAttribute('disabled', true);
}

function activeButton(){
    submitButton.removeAttribute('disabled');
    submitButton.addEventListener('click', submitForm.bind(this));
}

function submitForm(e) {
    e.preventDefault();
    console.log('enviando formulario...');
    setTimeout(() => {
        console.log('formulario enviado!');
        form.style.display = 'none';
        confirmation.style.display = 'block';
        setTimeout(() => {
            location.reload();
        }, 3000)
    }, 2000);
}
