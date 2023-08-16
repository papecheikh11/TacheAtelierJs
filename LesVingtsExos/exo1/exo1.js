// Créer une variable result qui contient la somme des variables a et b. Afficher le résultat de la somme dans une boite de dialogue.

let a = 25;
let b = 20;
let result = a + b;
alert("le resultat est de " + result);

let phrase = document.querySelector("#phrase");
phrase.innerText = `le resultat de la somme est de ${result}`;
