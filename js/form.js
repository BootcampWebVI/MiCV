let form = document.querySelector('#contacto .content-wrapper');
let confirmation = document.querySelector('#contacto .confirmation-wrapper');

let name = '';
let email = '';
let conocer = '';
let otros = '';
let phone = '';

let otrosText = '';

let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', submitForm.bind(this));

export function validateForm(){

    name = document.querySelector('#nombre').value;
    email = document.querySelector('#email').value;
    conocer = document.querySelector('#conocer').value;
    otros = document.querySelector('#otros');
    phone = document.querySelector('#telf').value;

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
            submitButton.removeAttribute('disabled');
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
