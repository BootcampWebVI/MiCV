let form = document.querySelector('#contacto .content-wrapper');
let confirmation = document.querySelector('#contacto .confirmation-wrapper');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let conocer = document.querySelector('#conocer');
let otros = '';
let phone = document.querySelector('#telf');

export function validateForm(){
    let activeButton = false;

    if(conocer.value === 'Otros'){
        otros = document.querySelector('#otros');
    }

    if(name !== null && email !== null && conocer !== null && phone !== null && phone !== null){
        activeButton = true; 
    }

    return activeButton;
    
}

export function submitForm(){
    console.log('enviando formulario...');
    setTimeout(() => {
        console.log('formulario enviado!');
        form.style.display = 'none';
        confirmation.style.display = 'block';
    }, 2000);
}
