// Créer un ensemble vide
const companies = new Set()
console.log(companies)
// Set(0) {}

// Création d'un ensemble à partir d'un tableau
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)
//   Set(4) {"English", "Finnish", "French", "Spanish"}

// Set est un objet itérable et nous pouvons parcourir chaque élément.
const languages1 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages1 = new Set(languages1)
  
  for (const language of setOfLanguages1) {
    console.log(language)
  }
//   English
//   Finnish
//   French
//   Spanish

// Ajouter un élément à un ensemble
const companies1 = new Set() // creating an empty set
console.log(companies1.size) // 0

companies1.add('Google') // add element to the set
companies1.add('Facebook')
companies1.add('Amazon')
companies1.add('Oracle')
companies1.add('Microsoft')
console.log(companies1.size) // 5 elements in the set
console.log(companies1)
// Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Nous pouvons également utiliser une boucle pour ajouter un élément à un ensemble.
const companies2 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies2) {
  setOfCompanies.add(company)
}

// Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Supprimer un élément d'un ensemble
// Nous pouvons supprimer un élément d’un ensemble en utilisant une méthode delete.

console.log(companies1.delete('Google'))
console.log(companies1.size) // 4 elements left in the set

// Effacer l'ensemble
// Il supprime tous les éléments d'un ensemble.

companies1.clear()
console.log(companies1)
// Set(0) {}

// Voir l'exemple ci-dessous pour savoir comment utiliser set.

const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages2)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages2.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

//   Autre cas d'utilisation de l'ensemble. Par exemple pour compter un élément unique dans un tableau.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers3 = new Set(numbers)

console.log(setOfNumbers3)
// Set(5) {5, 3, 2, 9, 4}

// Union d'ensembles
// Trouver une union à deux ensembles peut être réalisé en utilisant l'opérateur de propagation. Trouvons l'union de l'ensemble A et de l'ensemble B (AUB)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Set(6) {1, 2, 3, 4, 5,6}

// Intersection d'ensembles
// Trouver une intersection de deux ensembles peut être réalisé à l’aide d’un filtre. Trouvons l'intersection de l'ensemble A et de l'ensemble B (A ∩ B)

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a1.filter((num) => B1.has(num))
let C1 = new Set(c1)

console.log(C1)
// Set(3) {3, 4, 5}

// Différence d'ensembles
// Pour trouver la différence entre deux ensembles, vous pouvez utiliser un filtre. Trouvons la différence entre l'ensemble A et l'ensemble B (A \ B)

let a2 = [1, 2, 3, 4, 5]
let b2 = [3, 4, 5, 6]

let A2 = new Set(a2)
let B2 = new Set(b2)

let c2 = a2.filter((num) => !B2.has(num))
let C2 = new Set(c2)

console.log(C2)
// Set(2) {1, 2}

// Carte
// Créer une carte vide

const map = new Map()
console.log(map)
// Map(0) {}

// Création d'une carte à partir d'un tableau

let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map1 = new Map(countries)
  console.log(map1)
  console.log(map1.size)
//   Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
// 3

// Ajout de valeurs à la carte

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
// Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
// 3

// Obtenir une valeur de Map
console.log(countriesMap.get('Finland'))
// Helsinki

// Vérification de la clé dans la carte
// Vérifiez si une clé existe dans une carte en utilisant la méthode has . Il renvoie true ou false .

console.log(countriesMap.has('Finland'))
// true

// Obtenir toutes les valeurs de la carte à l'aide d'une boucle

for (const country of countriesMap) {
  console.log(country)
}
// (2) ["Finland", "Helsinki"]
// (2) ["Sweden", "Stockholm"]
// (2) ["Norway", "Oslo"]

for (const [country, city] of countriesMap){
    console.log(country, city)
   }
//    Finland Helsinki
//    Sweden Stockholm
//    Norway Oslo