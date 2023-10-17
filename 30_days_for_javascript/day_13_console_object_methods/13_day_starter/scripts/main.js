// Dans cette section, nous aborderons les méthodes de console et d’objet console. Les débutants absolus ne savent généralement pas lequel utiliser : console.log(), document.write() ou document.getElementById.

// Nous utilisons des méthodes d'objet de console pour afficher la sortie sur la console du navigateur et nous utilisons document.write pour afficher la sortie sur le document du navigateur (port d'affichage). Les deux méthodes sont utilisées uniquement à des fins de test et de débogage. La méthode console est l’outil de test et de débogage le plus populaire sur le navigateur. Nous utilisons document.getElementById() lorsque nous aimons interagir avec DOM, essayez d'utiliser JavaScript. Nous couvrirons DOM dans une autre section.

// En plus de la célèbre méthode console.log(), la console fournit d'autres méthodes supplémentaires.

// console.log()
// Nous utilisons console.log() pour afficher la sortie sur la console du navigateur. Nous pouvons remplacer les valeurs et nous pouvons également styliser la déconnexion en utilisant %c.

// Affichage de la sortie sur la console du navigateur

console.log('30 Days of JavaScript')

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

// Nous utilisons console.warn() pour avertir le navigateur. Par exemple pour informer ou avertir de la dépréciation d'une version d'un package ou de mauvaises pratiques. Copiez le code suivant et collez-le sur la console du navigateur pour voir les messages d'avertissement.
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

// console.erreur()
// La méthode console.error() affiche un message d'erreur.

console.error('This is an error message')
console.error('We all make mistakes')

// console.table()
// La méthode console.table() affiche les données sous forme de tableau sur la console. Affiche les données tabulaires sous forme de tableau. La console.table() prend un argument de données obligatoire, qui doit être un tableau ou un objet, et une colonne de paramètres facultative supplémentaire.

// Commençons par un tableau simple. Le code ci-dessous affiche un tableau avec deux colonnes. Une colonne d'index pour afficher l'index et une colonne de valeur pour afficher les noms

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

// Vérifions également le résultat d'un objet. Cela crée un tableau avec deux colonnes : une colonne d'index contenant les clés et une colonne de valeur contenant les valeurs de l'objet.

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
//   console.table(user)
//   Vérifiez le reste des exemples en copiant et collant sur la console du navigateur.

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

//   console.time()
// Démarre une minuterie que vous pouvez utiliser pour suivre la durée d'une opération. Vous donnez à chaque minuteur un nom unique et vous pouvez avoir jusqu'à 10 000 minuteurs exécutés sur une page donnée. Lorsque vous appelez console.timeEnd() avec le même nom, le navigateur affichera le temps, en millisecondes, écoulé depuis le démarrage du minuteur.

const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries1.length; i++) {
    console.log(countries1[i][0], countries1[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries1) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries1.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')
//   Selon la sortie ci-dessus, la boucle for normale est plus lente que la boucle for of ou forEach.
// console.info()
// Il affiche un message d'information sur la console du navigateur.

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert()
// Les méthodes console.assert() écrit un message d'erreur sur la console si l'assertion est fausse. Si l'affirmation est vraie, rien ne se passe. Le premier paramètre est une expression d'assertion. Si cette expression est fausse, un message d’erreur Échec de l’assertion s’affichera.

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// console.group()
// Le console.group() peut aider à regrouper différents groupes de journaux. Copiez le code suivant et collez-le sur la console du navigateur dans les groupes.

const names5 = ['Asabeneh', 'Brook', 'David', 'John']
const countries5 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user5 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users5 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names5)
console.groupEnd()

console.group('Countries')
console.log(countries5)
console.groupEnd()

console.group('Users')
console.log(user5)
console.log(users5)
console.groupEnd()

// console.count()
// Il imprime le nombre de fois que console.count() est appelé. Il prend un paramètre d'étiquette de chaîne. Il est très utile de compter le nombre de fois qu’une fonction est appelée. Dans l'exemple suivant, la méthode console.count() s'exécutera trois fois

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

//   console.clear()
// Le console.clear() nettoie la console du navigateur.