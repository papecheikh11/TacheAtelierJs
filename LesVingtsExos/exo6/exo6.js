// A l'aide de la fonction prompt(), demander un prix HT puis un taux de la TVA à l'utilisateur puis insérer le prix TTC dans la page HTML à l'aide de document.body.innerHTML. Si le prix TTC est strictement supérieur à 100 on affichera le prix en rouge sinon en vert. Pour simplifier on utilisera les bouts de code suivants sur l'élément HTML de votre choix :

// Rouge : style="color: red;"
// Vert : style="color: green;"
// Par exemple : <h1 style="color: red;">...</h1>

let prixHT = prompt("Entrer un prix HT");
let tauxTVA = prompt("Entrer le TVA");
let resultatTVA = tauxTVA / 100 + 1;
let ttc = prixHT * resultatTVA;
let texte = document.getElementById("text");

if (ttc > 100) {
  document.body.innerHTML = '<h1 style="color: red;">' + ttc + "</h1>";
} else {
  document.body.innerHTML = '<h1 style="color: green;">' + ttc + "</h1>";
}
