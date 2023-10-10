// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// pour la boucle
// For loop structure
// for(initialization, condition, increment/decrement){
    // code goes here
//   }
  for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  
  // 0 1 2 3 4 5
  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }
//   0 * 0 = 0
//   1 * 1 = 1
//   2 * 2 = 4
//   3 * 3 = 9
//   4 * 4 = 16
//   5 * 5 = 25

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// Ajouter tous les éléments du tableau

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15

// Création d'un nouveau tableau basé sur le tableau existant
const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0
for(let i = 0; i < numbers1.length; i++){
  newArr1.push( numbers1[i] ** 2)

}

console.log(newArr1)  // [1, 4, 9, 16, 25]

const countries1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr2 = []
for(let i = 0; i < countries1.length; i++){
  newArr2.push(countries1[i].toUpperCase())
}

console.log(newArr2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// boucle while
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

// faire une boucle do while

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5

// pour la boucle
// Nous utilisons la boucle for pour les tableaux. C'est un moyen très simple de parcourir un tableau si nous ne sommes pas intéressés par l'index de chaque élément du tableau.
// for (const element of arr) {
//     // code goes here
//   }


const numbers2 = [1, 2, 3, 4, 5]

for (const num of numbers2) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum2 = 0
for (const num of numbers) {
  sum2 = sum2 + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum2) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}


const countries3 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr3 = []
for(const country of countries3){
  newArr3.push(country.toUpperCase())
}

console.log(newArr3)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// casser
// Break est utilisé pour interrompre une boucle.

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2
//   Le code ci-dessus s'arrête si 3 est trouvé dans le processus d'itération.

// continuer
// Nous utilisons le mot-clé continue pour sauter certaines itérations.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5