// Fonction d'ordre supérieur
// Les fonctions d'ordre supérieur sont des fonctions qui prennent une autre fonction comme paramètre ou renvoient une fonction comme valeur. La fonction passée en paramètre est appelée callback.

// Rappeler
// Un rappel est une fonction qui peut être passée en paramètre à une autre fonction. Voir l'exemple ci-dessous.

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))
// Fonction de retour
// Les fonctions d'ordre supérieur renvoient la fonction sous forme de valeur ​

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

// Voyons si nous utilisons les fonctions de rappel. Par exemple, la méthode forEach utilise le rappel.

const numbers1 = [1, 2, 3, 4, 5]
const sumArray1 = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray1(numbers1))
15
// L'exemple ci-dessus peut être simplifié comme suit :

const numbers2 = [1, 2, 3, 4]
​
const sumArray2 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray2(numbers2))
15
// Temps de prise
// En JavaScript, nous pouvons exécuter certaines activités dans un certain intervalle de temps ou nous pouvons planifier (attendre) un certain temps pour exécuter certaines activités.

// définirIntervalle
// setTimeout
// Définition de l'intervalle à l'aide d'une fonction setInterval
// En JavaScript, nous utilisons la fonction d'ordre supérieur setInterval pour effectuer une activité en continu dans un certain intervalle de temps. La méthode globale setInterval prend une fonction de rappel et une durée comme paramètre. La durée est en millisecondes et le rappel sera toujours appelé dans cet intervalle de temps.

// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
// Définir une heure à l'aide d'un setTimeout
// En JavaScript, nous utilisons la fonction d'ordre supérieur setTimeout pour exécuter une action à un moment donné dans le futur. La méthode globale setTimeout prend une fonction de rappel et une durée comme paramètre. La durée est en millisecondes et le rappel attend pendant cette durée.

// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
// Programmation fonctionnelle
// Au lieu d'écrire une boucle régulière, la dernière version de JavaScript a introduit de nombreuses méthodes intégrées qui peuvent nous aider à résoudre des problèmes complexes. Toutes les méthodes intégrées prennent la fonction de rappel. Dans cette section, nous verrons forEach , map , filter , réduire , find , each , some et sort .

// pour chaque
// forEach : Itérer les éléments d'un tableau. Nous utilisons forEach uniquement avec des tableaux. Il prend une fonction de rappel avec des éléments, un paramètre d'index et un tableau lui-même. L'index et le tableau facultatifs.

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
let sum1 = 0;
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => console.log(num))
console.log(sum1)
1
2
3
4
5
let sum2 = 0;
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach(num => sum2 += num)

console.log(sum2)
15
const countries1 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
// FINLAND
// DENMARK
// SWEDEN
// NORWAY
// ICELAND
// carte
// map : Itérer les éléments d’un tableau et modifier les éléments du tableau. Il prend une fonction de rappel avec des éléments, un index, un paramètre de tableau et renvoie un nouveau tableau.

const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers5 = [1, 2, 3, 4, 5]
const numbersSquare = numbers5.map((num) => num * num)

console.log(numbersSquare)
[1, 4, 9, 16, 25]
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names1.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
// filtre
// Filtrer : filtrez les éléments qui remplissent complètement les conditions de filtrage et renvoient un nouveau tableau.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
['Finland', 'Ireland']
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
['Albania', 'Bolivia','Ethiopia']
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
['Japan', 'Kenya']
const scores1 = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores1.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
// réduire
// réduire : Réduire prend une fonction de rappel. La fonction de rappel prend l'accumulateur, la valeur initiale actuelle et facultative comme paramètre et renvoie une valeur unique. C'est une bonne pratique de définir une valeur initiale pour la valeur de l'accumulateur. Si nous ne spécifions pas ce paramètre, par défaut, l'accumulateur obtiendra un tableau first value. Si notre tableau est un tableau vide , Javascriptune erreur sera générée.

arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
const numbers6 = [1, 2, 3, 4, 5]
const sum = numbers6.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
15
// chaque
// each : Vérifiez si tous les éléments sont similaires sur un aspect. Il renvoie un booléen

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr1 = names2.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
true
const bools1 = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true
true
// trouver
// find : Renvoie le premier élément qui satisfait la condition

const ages1 = [24, 22, 25, 32, 35, 18]
const age1 = ages.find((age) => age < 20)

console.log(age1)
18
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result1 = names3.find((name) => name.length > 7)
console.log(result1)
Asabeneh
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
// { name: "Asabeneh", score: 95 }
// trouverIndex
// findIndex : Renvoie la position du premier élément qui satisfait la condition

const names4 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names4.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
// quelques
// some : Vérifiez si certains des éléments sont similaires sur un aspect. Il renvoie un booléen

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
// trier
// sort : Les méthodes de tri organisent les éléments du tableau par ordre croissant ou décroissant. Par défaut, la méthode sort() trie les valeurs sous forme de chaînes. Cela fonctionne bien pour les éléments d'un tableau de chaînes mais pas pour les nombres. Si les valeurs numériques sont triées sous forme de chaînes et cela nous donne un résultat erroné. La méthode de tri modifie le tableau d'origine. Il est recommandé de copier les données originales avant de commencer à utiliser la méthode de tri .

// Tri des valeurs de chaîne
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
// Tri des tableaux d'objets
// Chaque fois que nous trions des objets dans un tableau, nous utilisons la clé de l'objet pour comparer. Voyons l'exemple ci-dessous.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]