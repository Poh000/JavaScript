class Employee {
    constructor(nom, prénom, age, salaire) {
        this.nom = nom;
        this.prénom = prénom;
        this.age = age;
        this.salaire = salaire;
    }

    coutAnnuel(xxx, mois) {
        let coutAnnee = this.salaire * mois * (1 + xxx);
        return coutAnnee
    }

}

class Pme {
    constructor(nom, salariés, revenus, frais, achat,mois,charges) {
        this.nom = nom;
        this.salariés = salariés;
        this.revenus = revenus;
        this.frais = frais;
        this.achat = achat;
        this.mois = mois;
        this.charges = charges;
    }

    coutInitial() {
        let coutI = this.frais + this.achat;
        return coutI
    }

    coutEquipe(){
        let coutE = this.salariés.reduce((total, emp) => total + emp.coutAnnuel(this.charges, this.mois),0);
        return coutE
    }

    bilan (){
        let revenu = this.revenus - (this.coutEquipe() + this.coutInitial());
        return revenu
    }


    affichage(){
        console.log("----------------------MA PME----------------------")
        console.log(`Ma Petite Entreprise - : Cout Initial : ${this.coutInitial()}`);
        console.log(`Ma Petite Entreprise - : Cout Total Equipe : ${this.coutEquipe()}`);
        console.log(`Ma Petite Entreprise - : Ventes : ${this.revenus}`);
        console.log(`Ma Petite Entreprise - : BILAN : ${this.bilan()}`);
    }
}

const equipe = [
    new Employee("Jeff", "ExoNul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dubois", "Sylvia", 50, 4000),
]

const R = 300000;
const FF = 20000;
const FA = 50000;
const N = 12;
const XXX = 0.9;

const maPme = new Pme("Ma Petite Entreprise", equipe, R, FF, FA, N, XXX);

maPme.affichage();
