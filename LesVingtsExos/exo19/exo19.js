// L'instruction JS suivante permet de modifier la couleur d'arrière-plan de l'élément HTML <body>.

// JS
// document.body.style.background = 'red'; // Modifie la couleur d'arrière-plan en rouge (couleur texte CSS)
// document.body.style.background = 'rgb(69, 24, 67)'; // Modifie la couleur d'arrière-plan en violet (couleur en RGB)
// document.body.style.background = '#FF1493'; // Modifie la couleur d'arrière-plan en violet (couleur en hexadécimal)
// A l'aide du code de l'exercice précédent et de cette nouvelle instruction, écrire un code JS qui modifie aléatoirement la couleur d'arrière-plan de l'élément HTML <body>.

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = "rgb(" + r + ", " + g + ", " + b + ")";
document.body.style.background = color;
