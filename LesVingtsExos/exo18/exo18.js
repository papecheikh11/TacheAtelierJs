// A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces, compris entre 0 et 10 (inclus). Via une condition, compter le nombre de fois où le nombre 10 fait partie du tirage. A la fin du script, insérer en plus dans la page HTML le nombre en question.

let affiche = "";
let nombre = 10;
let nombre10 = 0;
for (let i = 0; i < nombre; i++) {
  affiche += "<li>" + Math.floor(Math.random() * 11) + "</li>";
  if (nombre == 10) {
    console.log("Le nombre 10 fait parti du tirage.");
    affiche += "<li>" + nombre + "<li/>";
  }
}

html = html + "<p>Il y a eu " + nombre10 + " tirages de 10.</p>";
document.body.innerHTML = affiche;
