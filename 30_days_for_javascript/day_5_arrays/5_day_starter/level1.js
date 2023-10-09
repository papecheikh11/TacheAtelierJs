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
console.log(`l'element du milieu tableau est ${tab2[2]}`);
console.log(`le dernier element du tableau est ${tab2[4]}`);

// Déclarez un tableau appelé MixedDataTypes , placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5
let MixedDataTypes = ['prenom', 1, true, 'age', 'nom', 26]

console.log(`la taille du tableau est de ${MixedDataTypes.length}`);



// Déclarez une variable de tableau nommée itCompanies et attribuez les valeurs initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Imprimez le tableau en utilisant console.log(
console.log(itCompanies);

// Imprimer le nombre d'entreprises dans le tableau
console.log(`le nombre d'entreprises ${itCompanies.length}`);

// Imprimer la première entreprise, la deuxième et la dernière entreprise
console.log(`la premier entreprise est de ${itCompanies[0]}`);
console.log(`la deuxieme entreprise est de ${itCompanies[1]}`);
console.log(`la derniere entreprise est de ${itCompanies[6]}`);

// Imprimez chaque entreprise
console.log(`la premier entreprise est de ${itCompanies[0]}`);
console.log(`la deuxieme entreprise est de ${itCompanies[1]}`);
console.log(`la troisieme entreprise est de ${itCompanies[2]}`);
console.log(`la quatrieme entreprise est de ${itCompanies[3]}`);
console.log(`la cinquieme entreprise est de ${itCompanies[4]}`);
console.log(`la sixieme entreprise est de ${itCompanies[5]}`);
console.log(`la derniere entreprise est de ${itCompanies[6]}`);

// Changez le nom de chaque entreprise en majuscules un par un et imprimez-les
console.log(`la premier entreprise est de ${itCompanies[0].toUpperCase()}`);
console.log(`la deuxieme entreprise est de ${itCompanies[1].toUpperCase()}`);
console.log(`la troisieme entreprise est de ${itCompanies[2].toUpperCase()}`);
console.log(`la quatrieme entreprise est de ${itCompanies[3].toUpperCase()}`);
console.log(`la cinquieme entreprise est de ${itCompanies[4].toUpperCase()}`);
console.log(`la sixieme entreprise est de ${itCompanies[5].toUpperCase()}`);
console.log(`la derniere entreprise est de ${itCompanies[6].toUpperCase()}`);

// Imprimez le tableau comme une phrase : Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes sociétés informatiques.
console.log(`voici votre tableau ${itCompanies.join(', ')}`);

// Vérifiez si une certaine entreprise existe dans le tableau itCompanies. Si elle existe retournez l'entreprise sinon retournez une entreprise introuvable
