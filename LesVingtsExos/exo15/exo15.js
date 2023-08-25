// Avec le code de l'exercice précédent (14) demander via la fonction prompt(), X lignes et Y colonnes puis constuire le tableau HTML et l'insérer dans la page HTML.

let monTab = "<table>";
let lignes = prompt("Nombre de lignes");
let colonnes = prompt("Nombre de colonnes");

for (let i = 1; i <= lignes; i++) {
  monTab += "<tr>";
  for (let k = 1; k <= colonnes; k++) {
    monTab += "<td>Hello <br /></td>";
  }
  monTab += "</tr>";
}
monTab += "</table>";
document.body.innerHTML = monTab;
