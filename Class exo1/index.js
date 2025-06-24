class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }


    calculImc() {
        let resImc = this.poids / (this.taille * this.taille);
        return resImc.toFixed(2);
    }

    display() {
        console.log(this.nom, "(", this.poids, this.taille, ") a un IMC de:", this.calculImc());
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),
]

for ( let person of list ){
    person.display();
}

