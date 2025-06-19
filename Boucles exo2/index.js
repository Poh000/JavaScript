function moyenne (tab){
    let resultat = 0;
    for (let i = 0; i< tab.length ; i++){
        resultat = resultat +tab[i];
    }
    let moyenne = resultat / tab.length ;
    return moyenne
}


console.log(moyenne([16,18,15,19,14,20]));