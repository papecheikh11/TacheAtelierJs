// Objet global de fenêtre
// Sans utiliser console.log(), ouvrez votre navigateur et vérifiez, vous verrez la valeur de a et b si vous écrivez a ou b sur le navigateur. Cela signifie que a et b sont déjà disponibles dans la fenêtre.
//scope.js

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible

// Portée mondiale
// Une variable déclarée globalement est accessible partout dans le même fichier. Mais le terme mondial est relatif. Il peut être global par rapport au fichier ou par rapport à un bloc de codes.
//scope.js

 let c = 'JavaScript' // is a global scope it will be found anywhere in this file
 let d = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(c, d) // JavaScript 10, accessible
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d) // Python 100
  }
  console.log(c, d)
}
letsLearnScope()
console.log(c, d) // JavaScript 10, accessible

// Portée locale
// Une variable déclarée comme locale n'est accessible que dans certains codes de bloc.

// Portée du bloc
// Portée de la fonction

//scope.js
let a2 = 'JavaScript' // is a global scope it will be found anywhere in this file
let b2 = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  // console.log(a1, b1) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a1 = 'Python'
    let b1 = 20
    let c1 = 30
    let d1 = 40
    value = !value
    console.log(a1, b1, c1, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  // console.log(a1, b1, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a2, b2) // JavaScript 10, accessible


// Maintenant, vous avez une compréhension de la portée. Une variable déclarée avec var uniquement limitée à la fonction mais la variable déclarée avec let ou const a la portée du bloc (bloc fonctionnel, bloc if, bloc de boucle, etc.). Un bloc en JavaScript est un code entre deux accolades ({}).

//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3


// Dans ES6 et versions ultérieures, il y a let et const , vous ne souffrirez donc pas de la sournoiserie de var . Lorsque nous utilisons let, notre variable a une portée de bloc et elle n'infectera pas d'autres parties de notre code.

//scope.js
function letsLearnScope1() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined


// La portée let et const sont les mêmes. La différence réside uniquement dans la réaffectation. Nous ne pouvons pas modifier ou réaffecter la valeur de la constvariable. Je vous suggère fortement d'utiliser let et const , en utilisant let et const vous écrirez du code propre et éviterez les erreurs difficiles à déboguer. En règle générale, vous pouvez utiliser let pour toute valeur qui change, const pour toute valeur constante et pour un tableau, un objet, une fonction fléchée et une expression de fonction.

// 📔 Objet
// Tout peut être un objet et les objets ont des propriétés et les propriétés ont des valeurs, donc un objet est une paire clé-valeur. L'ordre de la clé n'est pas réservé, ou il n'y a pas d'ordre. Pour créer un objet littéral, nous utilisons deux accolades.

// Créer un objet vide
// Un objet vide

const person = {}

// Créer une objection avec des valeurs
// Désormais, l’objet personne a les propriétés firstName, lastName, age, location, skills et isMarried. La valeur des propriétés ou des clés peut être une chaîne, un nombre, un booléen, un objet, null, undéfini ou une fonction.

// Voyons quelques exemples d'objet. Chaque clé a une valeur dans l'objet.

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person1)

// Obtenir les valeurs d'un objet
// Nous pouvons accéder aux valeurs de l'objet en utilisant deux méthodes :

// en utilisant . suivi du nom de la clé si le nom de la clé est un seul mot
// en utilisant des crochets et une citation

const person2 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.location) // undefined

// value can be accessed using square bracket and key name
console.log(person2['firstName'])
console.log(person2['lastName'])
console.log(person2['age'])
console.log(person2['age'])
console.log(person2['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person2['phone number'])

// Création de méthodes objet
// Désormais, l'objet personne a les propriétés getFullName. Le getFullName est une fonction à l’intérieur de l’objet personne et nous l’appelons une méthode objet. Ce mot clé fait référence à l'objet lui-même. Nous pouvons utiliser le mot this pour accéder aux valeurs des différentes propriétés de l'objet. Nous ne pouvons pas utiliser une fonction flèche comme méthode objet car le mot this fait référence à la fenêtre à l'intérieur d'une fonction flèche au lieu de l'objet lui-même. Exemple d'objet :
const person3 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person3.getFullName())
// Asabeneh Yetayeh

// Définition d'une nouvelle clé pour un objet
// Un objet est une structure de données mutable et nous pouvons modifier le contenu d'un objet après sa création.

// Définir une nouvelle clé dans un objet

const person4 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person4.nationality = 'Ethiopian'
person4.country = 'Finland'
person4.title = 'teacher'
person4.skills.push('Meteor')
person4.skills.push('SasS')
person4.isMarried = true

person4.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person4)
console.log(person4.getPersonInfo())


// Méthodes d'objet
// Il existe différentes méthodes pour manipuler un objet. Voyons quelques-unes des méthodes disponibles.

// Object.assign : Pour copier un objet sans modifier l'objet d'origine

const person5 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person5)
console.log(copyPerson)

// Obtenir les clés d'objet à l'aide de Object.keys()
// Object.keys : Pour obtenir les clés ou propriétés d'un objet sous forme de tableau

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// Obtenir des valeurs d'objet à l'aide de Object.values()
// Object.values : pour obtenir les valeurs d'un objet sous forme de tableau

const values = Object.values(copyPerson)
console.log(values)

// Obtenir les clés et les valeurs des objets à l'aide de Object.entries()
// Object.entries : Pour obtenir les clés et les valeurs d'un tableau

const entries = Object.entries(copyPerson)
console.log(entries)

// Vérification des propriétés à l'aide de hasOwnProperty()
// hasOwnProperty : Pour vérifier si une clé ou une propriété spécifique existe dans un objet

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))