const group1 = ["José","Hélène","Nat"];
const group2 = ["Chris","Nico","Joana"];

const liste = ["DamienLeMongol", ...group1,"DamienFaitDodo",...group2,"DamienAuSki"];
const liste2 = liste;
liste2.push("DamienAuBar");

console.log(liste);