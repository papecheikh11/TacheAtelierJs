//declaration des variables

const entrerNombre = document.querySelector("#nombreEntrer");
let bouttons = document.querySelectorAll(".boutton");
let nFinal = document.querySelector("#nombreDessous");

let resultat = 0;
let nbreDessous;

//les fonctions

function nombres(nombre) {
  resultat += nombre;
  entrerNombre.value += nombre;
  nbreDessous = resultat;
}

function operations(operation) {
  entrerNombre.value = operation;
  resultat += operation;
  nFinal.value = eval(nbreDessous);
}

function mesCalculs() {
  entrerNombre.value = eval(resultat);
}

function supprimerUn() {
  entrerNombre.value = "";
  resultat = nFinal.value;
  nbreDessous = nFinal.value;
}

function supprimerTout() {
  entrerNombre.value = "";
  nFinal.value = "";
  resultat = "";
}
