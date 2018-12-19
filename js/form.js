let form = document.querySelector('#contacto .content-wrapper');
let confirmation = document.querySelector('#contacto .confirmation-wrapper');

let name = '';
let email = '';
let conocer = '';
let otros = '';
let phone = '';
let extraInfo = '';

let otrosText = '';

let textareaValidate = false;

let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', submitForm.bind(this));

export function validateForm(){

    name = document.querySelector('#nombre').value;
    email = document.querySelector('#email').value;
    conocer = document.querySelector('#conocer').value;
    otros = document.querySelector('#otros');
    phone = document.querySelector('#telf').value;
    extraInfo = document.querySelector('#form textarea').value;

    let wordCounter = 0;
    if (extraInfo !== '') {
        let counterText = document.getElementById('counter');
        wordCounter = extraInfo.trim().split(' ').length;
        counterText.innerHTML = `<p>Te quedan ${150 - wordCounter} palabras</p>`;
        if (wordCounter <= 150) {
            textareaValidate = true;
        } else {
            textareaValidate = false;
        }
    }

    showOtrosInput();

    disableButton();
    
}

function showOtrosInput(){
    if (conocer === 'Otros') {
        otros.style.display = 'block';
        otrosText = otros.value;
    } else {
        otros.style.display = 'none';
    }
}

function disableButton(){

    if (name !== '' && email !== '' && conocer !== '' && phone !== '') {
        if ((conocer === 'Otros' && otrosText !== '') || (conocer !== 'Otros')){
            if((extraInfo !== '' && textareaValidate) || extraInfo === ''){
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
