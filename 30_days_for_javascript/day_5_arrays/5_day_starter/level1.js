const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//   Déclarez un tableau vide ;
let tab1 = [];

//   Déclarez un tableau avec plus de 5 éléments
let tab2 = [1, 2, 3, 4, 5];

// Trouvez la longueur de votre tableau
console.log(tab2.length);

// Récupère le premier élément, l'élément du milieu et le dernier élément du tableau

console.log(`le premier element du tableau est ${tab2[0]}`);
console.log(`l'element du milieu du tableau est ${tab2[2]}`);
console.log(`le dernier element du tableau est ${tab2.length-1}`);

// Déclarez un tableau appelé MixedDataTypes , placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5

let MixedDataTypes = ['prenom', 1, true, 'age', 'nom', 26]

console.log(`la taille du tableau est de ${MixedDataTypes.length}`);



// Déclarez une variable de tableau nommée itCompanies et attribuez les valeurs initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon