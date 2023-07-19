// Exercice 1:
// "numAverage" est une fonction JavaScript qui permet de calculer la moyenne de plusieurs nombres listés dans un tableau à passer en argument de la fonction.

// Exemple: 
// numAverage([5, 1, 1, 1, 5]);
// // renvoie : 2.6


let tab = [5, 1, 1, 1, 5];
let somme = 0
let moyenne = 0

function numAverage(){
    for(let i = 0; i < tab.length; i++){
        somme += tab[i]
    }
     moyenne = somme/tab.length

     return moyenne
}
console.log(numAverage);