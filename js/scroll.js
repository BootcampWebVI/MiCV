export function smoothScroll(ev){
    let currentYPosition = window.pageYOffset;
    let destination = destinationPosition(document.querySelector(ev.target.hash));

    if(currentYPosition > destination){
        setTimeout(() => {
            window.pageYOffset = destination;
            window.scrollBy(destination, currentYPosition);
        }, 800);
    }

    console.dir(destination)
}

function destinationPosition(dest){
    return dest.offsetTop
}