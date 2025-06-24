const suivi = document.querySelector("div");
let valeur = getComputedStyle(suivi).left;
let valLeft = parseInt(valeur, 10);

setInterval (() => {
    valLeft = valLeft + 5 ;
    suivi.style.left = valLeft + "px";
    console.log(valLeft);
    if (valLeft >= 700) {
        valLeft = 0;
    }
},50);


