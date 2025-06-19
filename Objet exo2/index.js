let coca = {
    calories: 70,
    sucre: 35,
    alternative: {
        cocaZero: {
            calories: 0,
            sucre: 0
        },
        cocaLight: {
            calories: 1,
            sucre: 0
        }
    }
}

coca.quoi="feur";
console.log(coca);


delete coca.quoi;
console.log(coca);

console.log(coca.alternative);
console.log(coca.alternative.cocaZero);
console.log(coca.alternative.cocaLight);
console.log(coca.alternative.cocaLight.sucre);

coca.alternative.cocaLight.quoi="feur";
console.log(coca.alternative.cocaLight);
