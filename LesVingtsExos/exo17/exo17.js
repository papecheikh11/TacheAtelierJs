// A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces, compris entre 0 et 10 (inclus). Via une condition, afficher en console si le nombre 10 fait partie du tirage.

let affiche = "";
let nombre = 10;
for (let i = 0; i < nombre; i++) {
  affiche += "<li>" + Math.floor(Math.random() * 11) + "</li>";
  if (nombre == 10) {
    console.log("Le nombre 10 fait parti du tirage.");
    affiche += "<li>" + nombre + "<li/>";
  }
}
document.body.innerHTML = affiche;
