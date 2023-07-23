// Créez une fonction puissance qui :

// prend deux arguments
// réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS
// 💡 Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois

function puissance(nombre, expo) {
  if (expo === 0) {
    return 1;
  } else if (expo < 0) {
    console.log("L'exposant doit être un entier positif ou nul.");
  }

  let resultat = 1;
  for (let i = 1; i <= expo; i++) {
    resultat *= nombre;
  }
  return resultat;
}
console.log(puissance(4, 4));

// Boucle et tableau
// On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :

// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :

// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

function initXY(axeAbcisses, axeOrdonnes) {
  const nbrObjets = 20;
  const decalageX = 40;
  const decalageY = 30;

  const posX = [axeAbcisses];
  const posY = [axeOrdonnes];

  for (let i = 1; i < nbrObjets; i++) {
    posX.push(axeAbcisses + i * decalageX);
    posY.push(axeOrdonnes + i * decalageY);
  }

  return { posX, posY };
}

console.log(initXY(0, 0));

// Vous disposez d'un tableau contenant des nombres aléatoires et vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :

// tous les éléments de tInit inférieurs à 10 dans le tableau tInf
// et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
// 💡 la fonction doit fonctionner quel que soit le tableau tInit

const tInit = [5, 15, 8, 20, 3, 12, 9];
const tInf = [];
const tSup = [];

function sortNumbers(tInit, tInf, tSup) {
  for (const number of tInit) {
    if (number < 10) {
      tInf.push(number);
    } else {
      tSup.push(number);
    }
  }
}

sortNumbers(tInit, tInf, tSup);

console.log(tInit);
console.log(tInf);
console.log(tSup);
