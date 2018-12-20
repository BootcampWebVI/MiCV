let form = document.querySelector('#contacto .content-wrapper');
let confirmation = document.querySelector('#contacto .confirmation-wrapper');

let name = '';
let email = '';
let conocer = '';
let otros = '';
let phone = '';
let extraInfo = '';

let otrosText = '';

let inputValidate = false;
let textareaValidate = false;

let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', submitForm.bind(this));

export function validateForm(e){

    console.log(e)

    name = document.querySelector('#nombre');
    email = document.querySelector('#email');
    conocer = document.querySelector('#conocer');
    otros = document.querySelector('#otros');
    phone = document.querySelector('#telf');
    extraInfo = document.querySelector('#form textarea');

    countTextarea();

    showOtrosInput();

    disableButton();
    
}

function countTextarea(){
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
}

function showOtrosInput(){
    if (conocer.value === 'Otros') {
        otros.style.display = 'block';
        otrosText = otros.value;
    } else {
        otros.style.display = 'none';
    }
}

function disableButton(){

    if (name.value !== '' && email.value !== '' && conocer.value !== '' && phone.value !== '') {
        if ((conocer.value === 'Otros' && otrosText !== '') || (conocer.value !== 'Otros')){
            if ((extraInfo.value !== '' && textareaValidate) || extraInfo.value === ''){
                submitButton.removeAttribute('disabled');
            }else {
                submitButton.setAttribute('disabled', true);
            }
        } else {
            submitButton.setAttribute('disabled', true);
        }
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

function submitForm() {
    console.log('enviando formulario...');
    setTimeout(() => {
        console.log('formulario enviado!');
        form.style.display = 'none';
        confirmation.style.display = 'block';
    }, 2000);
}
