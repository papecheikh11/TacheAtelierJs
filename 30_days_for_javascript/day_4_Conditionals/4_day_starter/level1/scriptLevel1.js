// Obtenez les commentaires de l'utilisateur à l'aide de l'invite (« Entrez votre âge : »). Si l'utilisateur a 18 ans ou plus, donnez un feedback : "Vous êtes assez vieux pour conduire", mais s'il n'a pas 18 ans, donnez un autre feedback indiquant d'attendre le nombre d'années dont il a besoin pour atteindre 18 ans.

let age = prompt("Veuillez saisir votre age");

if (age >= 18) {
  alert(`Vous avez ${age} ans et vous êtes assez vieux pour conduire`);
} else {
  alert(
    `il vous reste ${
      18 - age
    } ans donc vous devez attendre d'avoir 18 ans pour conduire`
  );
}

// Comparez les valeurs de myAge et yourAge en utilisant if… else. Sur la base de la comparaison, enregistrez le résultat sur la console en indiquant qui est le plus âgé (moi ou vous). Utilisez prompt ("Entrez votre âge :") pour obtenir l'âge en entrée.

let myAge = prompt("Veuillez entrer votre age");
let yourAge = prompt("Veuillez entrer son age");

if (yourAge > myAge) {
  console.log(`you are ${yourAge - myAge} years older than me`);
} else {
  console.log("we are the same age or i am older than you");
}

//   Si a est supérieur à b, renvoyez « a est supérieur à b », sinon « a est inférieur à b ». Essayez de le mettre en œuvre de manière

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} est superieur a ${b}`);
} else if (a < b) {
  console.log(`${a} est inferieur a ${b}`);
} else {
  console.log(`${a} est egale a ${b}`);
}


// Les nombres pairs sont divisibles par 2 et le reste est nul. Comment vérifier si un nombre est pair ou non en utilisant JavaScript ?

let number = prompt("Veuillez saisir un nombre")



if ((number % 2) == 0) {
    console.log("Votre nombre est paire");
}
else{
    console.log("Votre nombre est impaire");
}