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
