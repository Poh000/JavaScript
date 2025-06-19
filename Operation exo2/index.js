let val1 = parseInt(prompt("Quel est le premier nombre ?"));
let val2 = parseInt(prompt("Quel est le deuxième nombre ?"));

if (val1 > val2 ) {
    console.log(val1);
} else if (val1 < val2) {
    console.log(val2);
} else {
    console.log("Les 2 nombres sont égaux")
}
