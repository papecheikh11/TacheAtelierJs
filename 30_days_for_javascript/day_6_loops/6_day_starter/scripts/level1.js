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

const mernStack = ["MongoDB", "Express", "React", "Node"];

//   Itérer de 0 à 10 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("-----------------------------");

// Itérer de 10 à 0 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while
for (let j = 10; j >= 0; j--) {
  console.log(j);
}
console.log("-----------------------------");

// Itérer de 0 à n en utilisant la boucle for
let n = 5;

for (let i = 0; i <= n; i++) {
  console.log(i);
}
console.log("-----------------------------");

//   Écrivez une boucle qui crée le modèle suivant en utilisant console.log() :
// #
// ##
// ###
// ####
// #####
// ######
// #######
const tab1 = [1, 2, 3, 4, 5, 6, 7];
for (let k = 0; k <= tab1.length; k++) {
  if (k == 0) {
    console.log(`${tab1[0]}`);
  } else if (k == 1) {
    console.log(`${tab1[0]} ${tab1[1]}`);
  } else if (k == 2) {
    console.log(`${tab1[0]} ${tab1[1]} ${tab1[2]}`);
  } else if (k == 3) {
    console.log(`${tab1[0]} ${tab1[1]} ${tab1[2]} ${tab1[3]}`);
  } else if (k == 4) {
    console.log(`${tab1[0]} ${tab1[1]} ${tab1[2]} ${tab1[3]} ${tab1[4]}`);
  } else if (k == 5) {
    console.log(
      `${tab1[0]} ${tab1[1]} ${tab1[2]} ${tab1[3]} ${tab1[4]} ${tab1[5]}`
    );
  } else if (k == 6) {
    console.log(
      `${tab1[0]} ${tab1[1]} ${tab1[2]} ${tab1[3]} ${tab1[4]} ${tab1[5]} ${tab1[6]}`
    );
  }
}
console.log("-----------------------------");
// Utilisez la boucle pour imprimer le motif suivant :
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
console.log("-----------------------------");
// En utilisant la boucle, imprimez le motif suivant

const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`i  i²2  i²3`);

for (let k = 0; k <= tab.length; k++) {
  if (k == 0) {
    console.log(`${tab[0]}  ${tab[0 ** 2]}  ${tab[0 ** 3]}`);
  } else if (k == 1) {
    console.log(`${tab[1]}  ${tab[1] ** 2}  ${tab[1] ** 3}`);
  } else if (k == 2) {
    console.log(`${tab[2]}  ${tab[2] ** 2}  ${tab[2] ** 3}`);
  } else if (k == 2) {
    console.log(`${tab[2]}  ${tab[2] ** 2}  ${tab[2] ** 3}`);
  } else if (k == 3) {
    console.log(`${tab[3]}  ${tab[3] ** 2}  ${tab[3] ** 3}`);
  } else if (k == 4) {
    console.log(`${tab[4]}  ${tab[4] ** 2}  ${tab[4] ** 3}`);
  } else if (k == 5) {
    console.log(`${tab[5]}  ${tab[5] ** 2}  ${tab[5] ** 3}`);
  } else if (k == 6) {
    console.log(`${tab[6]}  ${tab[6] ** 2}  ${tab[6] ** 3}`);
  } else if (k == 7) {
    console.log(`${tab[7]}  ${tab[7] ** 2}  ${tab[7] ** 3}`);
  } else if (k == 8) {
    console.log(`${tab[8]}  ${tab[8] ** 2}  ${tab[8] ** 3}`);
  } else if (k == 9) {
    console.log(`${tab[9]}  ${tab[9] ** 2}  ${tab[9] ** 3}`);
  } else if (k == 10) {
    console.log(`${tab[10]}  ${tab[10] ** 2}  ${tab[10] ** 3}`);
  }
}
console.log("-----------------------------");

// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres pairs
for (let i = 0; i <= 100; i++) {
  let n = i % 2;
  if (n == 0) {
    console.log(`Ceci: ${i} est un nombre paire`);
  }
}

console.log("-----------------------------");

// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres impairs
for (let i = 0; i <= 100; i++) {
  let n = i % 2;
  if (n !== 0) {
    console.log(`Ceci: ${i} est un nombre impaire`);
  }
}

console.log("-----------------------------");

// Utilisez la boucle for pour parcourir de 0 à 100 et imprimer uniquement les nombres premiers
