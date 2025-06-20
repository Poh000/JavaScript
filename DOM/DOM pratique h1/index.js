const titre = document.body.getElementsByTagName("h1");

console.log(titre);

const goat = document.getElementById("goat");
console.log(goat);

const uno = document.querySelector("h2");
console.log(uno);

const all = document.querySelectorAll("h2");
console.log(all);

const nuno = document.querySelector(".nombre");
console.log(nuno);

const nall = document.querySelectorAll(".nombre");
console.log(nall);

const chiant = document.getElementById("CLC");

const inutile = document.getElementById("inutil");

const uun = document.getElementById("un");
const troois = document.getElementById("trois");
document.body.insertBefore(troois, uun);
document.body.appendChild(uun);

document.body.removeChild(goat);
const node = document.createTextNode("goat");
document.body.appendChild(node);
document.body.replaceChild(chiant, titre[0]);

const txt = document.body.getElementsByTagName("p");

function ajoutTexte(pseudo, duTexte) {
    const newTxt = document.createElement("p");

    newTxt.textContent = `<strong> ${pseudo}</strong> : ${duTexte}`;
    document.body.appendChild(newTxt);
}

ajoutTexte("Damien", "Boyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

// Modification texte / fonctions fléchées

const texteTab = Array.from(txt);
texteTab.map(txt => txt.innerHTML = "LOL HACKED");

console.log(texteTab);

const textTitre = Array.from(titre);
textTitre.map(function(titre){
    return titre.innerHTML = "CHEH"
} )
console.log (textTitre);


// Offset

console.log(chiant.offsetHeight);
console.log(chiant.offsetWidth);
console.log(chiant.clientWidth);

