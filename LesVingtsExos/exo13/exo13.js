// Déclarer une variable avec le nom de votre choix et avec la valeur 0. Tant que cette variable n'atteint pas 20, il faut :

// l'afficher dans la page HTML;
// incrémenter sa valeur de 2 ;

let affichage = "";
let nombre = 0;

while (nombre <= 20) {
  affichage = affichage + nombre + "<br />";
  nombre = nombre + 2;
}
document.body.innerHTML = affichage;
