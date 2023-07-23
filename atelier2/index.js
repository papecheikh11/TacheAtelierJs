// Exercice 1:
// "numAverage" est une fonction JavaScript qui permet de calculer la moyenne de plusieurs nombres listés dans un tableau à passer en argument de la fonction.

// Exemple: 
// numAverage([5, 1, 1, 1, 5]);
// // renvoie : 2.6


function numAverage(maFonction){
    let somme = 0
    let moyenne = 0
    for(let i = 0; i < tab.length; i++ ){
        somme += maFonction[i]
        moyenne = somme/tab.length
    }
    return moyenne
}

const tab = [5, 1, 1, 1, 5]

let monTableau = numAverage(tab)
console.log(monTableau);
