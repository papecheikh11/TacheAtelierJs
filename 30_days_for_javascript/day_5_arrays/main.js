// Comment créer un tableau avec des valeurs

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


// Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
// Number of numbers: 6
// Fruits: ['banana', 'orange', 'mango', 'lemon']
// Number of fruits: 4
// Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// Number of vegetables: 5
// Animal products: ['milk', 'meat', 'butter', 'yoghurt']
// Number of animal products: 4
// Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
// Number of web technologies: 7
// Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
// Number of countries: 5

// Le tableau peut contenir des éléments de différents types de données

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)


// Création d'un tableau à l'aide de split
// Comme nous l'avons vu dans la section précédente, nous pouvons diviser une chaîne à différentes positions et passer à un tableau. Voyons les exemples ci-dessous.


let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accéder aux éléments du tableau à l'aide de l'index



const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits2[1]
console.log(secondFruit) // orange

let lastFruit = fruits2[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits2.length - 1
lastFruit = fruits2[lastIndex]

console.log(lastFruit)  // lemon

const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers2)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers2[0])      //  -> 0
console.log(numbers2[5])      //  -> 100

let lastIndex2 = numbers2.length - 1;
console.log(numbers2[lastIndex2]) // -> 100


const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs2)        // all the array items
  console.log(webTechs2.length) // => to know the size of the array, which is 7
  console.log(webTechs2[0])     //  -> HTML
  console.log(webTechs2[6])     //  -> MongoDB
  
  let lastIndex3 = webTechs2.length - 1
  console.log(webTechs2[lastIndex3]) // -> MongoDB



  const countries2 = [
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
    'Kenya'
  ] // List of countries
  
  console.log(countries2)      // -> all countries in array
  console.log(countries2[0])   //  -> Albania
  console.log(countries2[10])  //  -> Kenya
  
  let lastIndex4 = countries2.length - 1;
  console.log(countries2[lastIndex4]) //  -> Kenya


  const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
  let lastIndex5 = shoppingCart.length - 1;
  console.log(shoppingCart[lastIndex5]) //  -> Sugar


//   Modification d'un élément de tableau
// Un tableau est mutable (modifiable). Une fois un tableau créé, nous pouvons modifier le contenu des éléments du tableau.

const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10      // changing 1 at index 0 to 10
numbers3[1] = 20      // changing  2 at index 1 to 20

console.log(numbers3) // [10, 20, 3, 4, 5]

const countries3 = [
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
  'Kenya'
]

countries3[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex6 = countries3.length - 1
countries3[lastIndex6] = 'Korea' // Replacing Kenya by Korea

console.log(countries3)

// Constructeur de tableau
// Tableau : pour créer un tableau.

const arr2 = Array() // creates an an empty array
console.log(arr2)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]


// Création de valeurs statiques avec remplissage
// fill : remplit tous les éléments du tableau avec une valeur statique

const arr3 = Array() // creates an an empty array
console.log(arr3)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

// Concaténation d'un tableau à l'aide de concat
// concat : Pour concaténer deux tableaux.

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const fruits3 = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables2 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits3.concat(vegetables2)                 // concatenate the two arrays

console.log(fruitsAndVegetables)

// Obtenir la longueur du tableau
// Longueur : Pour connaître la taille du tableau

const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.length) // -> 5 is the size of the array

// Obtenir l'index d'un élément dans un tableau arr
// indexOf : pour vérifier si un élément existe dans un tableau. S'il existe, il renvoie l'index, sinon il renvoie -1.

const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.indexOf(5)) // -> 4
console.log(numbers5.indexOf(0)) // -> -1
console.log(numbers5.indexOf(1)) // -> 0
console.log(numbers5.indexOf(6)) // -> -1

// Vérifiez un élément s'il existe dans un tableau.

// Vérifier les éléments dans une liste


// let us check if a banana exist in the array

const fruits4 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits4.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits4.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array


// Obtenir le dernier index d'un élément dans un tableau
// lastIndexOf : Il donne la position du dernier élément du tableau. S'il existe, il renvoie l'index sinon il renvoie -1.

const numbers6 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers6.lastIndexOf(2)) // 7
console.log(numbers6.lastIndexOf(0)) // -1
console.log(numbers6.lastIndexOf(1)) //  6
console.log(numbers6.lastIndexOf(4)) //  3
console.log(numbers6.lastIndexOf(6)) // -1


// include : Pour vérifier si un élément existe dans un tableau. S'il existe, il renvoie le vrai, sinon il renvoie le faux.

const numbers7 = [1, 2, 3, 4, 5]

console.log(numbers7.includes(5)) // true
console.log(numbers7.includes(0)) // false
console.log(numbers7.includes(1)) // true
console.log(numbers7.includes(6)) // false

const webTechs3 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs3.includes('Node'))  // true
console.log(webTechs3.includes('C'))     // false

// Vérification du tableau
// Array.isArray : pour vérifier si le type de données est un tableau

const numbers8 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers8)) // true

const number = 100
console.log(Array.isArray(number)) // false

// Conversion d'un tableau en chaîne
// toString : convertit le tableau en chaîne

const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// Joindre des éléments de tableau
// join : Il est utilisé pour joindre les éléments du tableau, l'argument que nous avons passé dans la méthode join sera joint dans le tableau et reviendra sous forme de chaîne. Par défaut, il se joint par une virgule, mais nous pouvons transmettre différents paramètres de chaîne qui peuvent être joints entre les éléments.

const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.join()) // 1,2,3,4,5

const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names1.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names1.join('')) //AsabenehMathiasEliasBrook
console.log(names1.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names1.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names1.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs4 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs4.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs4.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Éléments du tableau en tranches
// Trancher : pour découper plusieurs éléments dans la plage. Il prend deux paramètres : la position de départ et la position de fin. Il n'inclut pas la position finale.

const numbers0 = [1,2,3,4,5]

console.log(numbers0.slice()) // -> it copies all  item
console.log(numbers0.slice(0)) // -> it copies all  item
console.log(numbers0.slice(0, numbers0.length)) // it copies all  item
console.log(numbers0.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Méthode d'épissage dans un tableau
// Splice : Il faut trois paramètres : la position de départ, le nombre de fois à supprimer et le nombre d'éléments à ajouter.

const numbers10 = [1, 2, 3, 4, 5]
numbers10.splice()
console.log(numbers10)                // -> remove all items

const numbers11 = [1, 2, 3, 4, 5]
numbers11.splice(0,1)
console.log(numbers11)            // remove the first item

const numbers12 = [1, 2, 3, 4, 5, 6]
numbers12.splice(3, 3, 7, 8, 9)
console.log(numbers12.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items



// Ajout d'un élément à un tableau à l'aide de push
// Push : ajout d'un élément à la fin. Pour ajouter un élément à la fin d'un tableau existant, nous utilisons la méthode push.


// syntax
const arr4  = ['item1', 'item2','item3']
arr4.push('new item')
console.log(arr4)
// ['item1', 'item2','item3','new item']


const numbers14 = [1, 2, 3, 4, 5]
numbers14.push(6)
console.log(numbers14) // -> [1,2,3,4,5,6]

numbers14.pop() // -> remove one item from the end
console.log(numbers14) // -> [1,2,3,4,5]


let fruits5 = ['banana', 'orange', 'mango', 'lemon']
fruits5.push('apple')
console.log(fruits5)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits5.push('lime')
console.log(fruits5)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']



// Suppression de l'élément de fin à l'aide de pop
// pop : suppression de l'élément à la fin.

const numbers15 = [1, 2, 3, 4, 5]
numbers15.pop() // -> remove one item from the end
console.log(numbers15) // -> [1,2,3,4]


// Supprimer un élément depuis le début
// shift : suppression d'un élément du tableau au début du tableau.

const numbers16 = [1, 2, 3, 4, 5]
numbers16.shift() // -> remove one item from the beginning
console.log(numbers16) // -> [2,3,4,5]

// Ajouter un élément depuis le début
// unshift : ajout d'un élément de tableau au début du tableau.

const numbers17 = [1, 2, 3, 4, 5]
numbers17.unshift(0) // -> add one item from the beginning
console.log(numbers17) // -> [0,1,2,3,4,5]

// Inverser l'ordre des tableaux
// reverse : inverse l’ordre d’un tableau.

const numbers18 = [1, 2, 3, 4, 5]
numbers18.reverse() // -> reverse array order
console.log(numbers18) // [5, 4, 3, 2, 1]

numbers18.reverse()
console.log(numbers18) // [1, 2, 3, 4, 5]


// Trier les éléments dans un tableau
// sort : organise les éléments du tableau par ordre croissant. Sort prend une fonction de rappel, nous verrons comment nous utilisons le tri avec une fonction de rappel dans les sections suivantes.

const webTechs5 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs5.sort()
  console.log(webTechs5) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs5.reverse() // after sorting we can reverse it
  console.log(webTechs5) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//   Tableau de tableaux
// Le tableau peut stocker différents types de données, y compris un tableau lui-même. Créons un tableau de tableaux

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]