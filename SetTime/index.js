const suivi = document.querySelector("div");

function suiviSouris (event) {
    const largeur = suivi.offsetWidth;
    const hauteur = suivi.offsetHeight;
    
    suivi.style.left = (event.clientX - largeur / 2) + 'px';
    suivi.style.top = (event.clientY - hauteur / 2) + 'px';
}


document.addEventListener ("mousemove", suiviSouris);

setTimeout (() => {
    document.removeEventListener("mousemove", suiviSouris);
    suivi.style.color = ('red');
    suivi.innerText= ("GAME OVER");
},5000);