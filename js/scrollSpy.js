
let sectionsPosition = [];

function getSectionPosition() {
    let sectionQuienSoy = document.getElementById('quien-soy');
    let sectionEstudios = document.getElementById('estudios');
    let sectionExperiencia = document.getElementById('experiencia');
    let sectionSobreMi = document.getElementById('sobre-mi');
    let sectionContacto = document.getElementById('contacto');

    sectionsPosition['#quien-soy'] = cumulativeOffset(sectionQuienSoy);
    sectionsPosition['#estudios'] =  cumulativeOffset(sectionEstudios)
    sectionsPosition['#experiencia'] = cumulativeOffset(sectionExperiencia);
    sectionsPosition['#sobre-mi'] = cumulativeOffset(sectionSobreMi);
    sectionsPosition['#contacto'] =  cumulativeOffset(sectionContacto);

    console.dir(sectionsPosition)
}

function addActive(target){
    let link = document.querySelector('a[href="#'+ target +'"]');
    link.classList.add('active');
}

function removeActive(){
    let links = document.querySelectorAll('#home .navigator ul li a');

    links.forEach((link)=>{
        link.classList.remove('active');
    });
}

function cumulativeOffset(element) {
    var top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);
    return top;
};

export function scrollSpy() {
    getSectionPosition();

    let currentScrollPosition = window.pageYOffset;
    let target = '';

    console.log(currentScrollPosition)

    if (currentScrollPosition >= sectionsPosition['#quien-soy'] && currentScrollPosition < sectionsPosition['#estudios']) {
        target = 'quien-soy';
    }

    else if (currentScrollPosition >= sectionsPosition['#estudios'] && currentScrollPosition < sectionsPosition['#experiencia']) {
        target = 'estudios';
    }

    else if (currentScrollPosition >= sectionsPosition['#experiencia'] && currentScrollPosition < sectionsPosition['#sobre-mi']) {
        target = 'experiencia';
    }

    else if (currentScrollPosition >= sectionsPosition['#sobre-mi'] && currentScrollPosition < sectionsPosition['#contacto']) {
        target = 'sobre-mi'
    }

    else if (currentScrollPosition >= sectionsPosition['#contacto']){
        target = 'contacto';
    }

    removeActive();

    if(target !== ''){
        addActive(target);
    }

}
