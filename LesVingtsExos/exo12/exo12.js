// En utilisant deux boucles for, écrire un script qui produit le résultat ci-dessous, dans la page HTML.

let affichage = "";
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= i; k++) {
    affichage = affichage + i;
  }
  affichage += "<br />";
}
document.body.innerHTML = affichage;
