let noteA = 16;
let noteB = 12;
function moyenne (a,b) {
    return (a+b)/2
}
console.log(moyenne(noteA,noteB));


let tab1 = [18,12,16,14,10,8];
let resultat = 0;
let len = tab1.length;
for (let i = 0; i< len ; i++){
    resultat += tab1[i];
}
console.log (resultat/len);