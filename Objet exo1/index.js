let voiture = {
    "nbChevaux": 600,
    "feurMax": 400,
    "faiblesse": ["feur","kette"]
}

let coca = {
    "calorie": 0,
    "feurMax": 0,
    "faiblesse": ["edulcoran","DamienLeMongol"]
}

let afficher ="feurMax";

console.log(coca.feurMax);
console.log(coca["feurMax"]);
console.log(coca[afficher]);
console.log(coca.faiblesse[1]);