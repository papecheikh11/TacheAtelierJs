let prixHT = prompt("Entrer un prix HT");
let tauxTVA = prompt("Entrer le TVA");
let resultatTVA = tauxTVA / 100 + 1;
let ttc = prixHT * resultatTVA;

document.body.innerText = `le prix TTC est de ${ttc}`;
