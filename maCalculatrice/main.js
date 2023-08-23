//---------------------- declaration des variables -------------------

const entrerNombre = document.querySelector("#nombreEntrer");
let bouttons = document.querySelectorAll(".boutton");
let nFinal = document.querySelector("#nombreDessous");

let resultat = 0;
let nbreDessous;

//--------------------- les fonctions ------------------------------

function nombres(nombre) {
  entrerNombre.value += nombre;
  resultat += nombre;
  nbreDessous = resultat;
}

// ------------------ Fonctions pour les operations -----------------------

function operations(operation) {
  entrerNombre.value = operation;
  resultat += operation;
  nFinal.value = eval(nbreDessous);
}

// ------------------- Fonction pour le resultat -----------------------

function mesCalculs() {
  entrerNombre.value = eval(resultat);
}

// ------------------ Fonctions pour les bouttons de suppression----------------

function supprimerUn() {
  entrerNombre.value = "";
  resultat = nFinal.value;
  nbreDessous = nFinal.value;
}

function supprimerTout() {
  entrerNombre.value = "";
  nFinal.value = "";
  resultat = "";
  nbreDessous = 0;
}
