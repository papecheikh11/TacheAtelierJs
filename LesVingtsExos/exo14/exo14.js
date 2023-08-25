// Construire un tableau HTML, sans en-tête, avec X lignes et avec Y colonnes dans un élément <table>. Ajouter dans les celulles un contenu aléatoire de votre choix. Enfin, placer ce tableau dans la page HTML.
let monTab = "<table>";
let lignes = 7;
let colonnes = 4;

for (let i = 1; i <= lignes; i++) {
  monTab += "<tr>";
  for (let k = 1; k <= colonnes; k++) {
    monTab += "<td>Hello <br /></td>";
  }
  monTab += "</tr>";
}
monTab += "</table>";
document.body.innerHTML = monTab;
