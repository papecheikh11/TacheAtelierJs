// A l'aide de la fonction prompt(), demander un prix HT à l'utilisateur puis insérer le prix TTC (TVA 20 %) dans la page HTML à l'aide de document.body.innerText.

let prix = prompt("Veuillez entrer le prix HT");
let prixTTC = prix * 1.2;
console.log(prixTTC);

document.body.innerText = `Affichage du prix hT: ${prixTTC}`;
