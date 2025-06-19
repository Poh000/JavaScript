function mention (tab){
    let resultat = 0;
    for (let i = 0; i< tab.length ; i++){
        resultat = resultat +tab[i];
    }
    let moyenne = resultat / tab.length ;
    if (moyenne >= 15){
        return "Très Bien"
    } else if (moyenne >= 10){
        return "Assez Bien"
    } else {
        return "Refus"
    }
}

console.log (mention([18,17,16]))
console.log (mention([12,13,14]))
console.log (mention([9,7,5]))