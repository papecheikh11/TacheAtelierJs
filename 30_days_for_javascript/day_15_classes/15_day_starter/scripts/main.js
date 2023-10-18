// Définir une classe
// Pour définir une classe en JavaScript, nous avons besoin du mot-clé class , du nom d'une classe dans CamelCase et du code de bloc (deux accolades). Créons un nom de classe Person.

 // syntax
// class ClassName {
//      code goes here
// }

// La classe d'instanciation signifie créer un objet à partir d'une classe. Nous avons besoin du mot-clé new et nous appelons le nom de la classe après le mot new.

// Créons un objet chien à partir de notre classe Person.

// class Person {
//     // code goes here
//   }
//   const person = new Person()
//   console.log(person)
//   class Person {
//     // code goes here
//   }
 
// Person{}

// Constructeur de classe
// Le constructeur est une fonction intégrée qui permet de créer un plan pour notre objet. La fonction constructeur commence par un mot-clé constructeur suivi d'une parenthèse. A l'intérieur de la parenthèse nous passons les propriétés de l'objet en paramètre. Nous utilisons le mot-clé this pour attacher les paramètres du constructeur à la classe.

// Le constructeur de classe Person suivant possède les propriétés firstName et lastName. Ces propriétés sont attachées à la classe Person à l'aide de ce mot-clé. Cela fait référence à la classe elle-même.


class Person1 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person1()
  
  console.log(person1)

//   Person {firstName: undefined, lastName:undefined}

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person2 = new Person('Asabeneh', 'Yetayeh')
  
  console.log(person2)

//   Comme nous l'avons dit au tout début, une fois que nous créons une classe, nous pouvons créer de nombreux objets en utilisant la classe. Créons maintenant de nombreux objets personne en utilisant la classe Person.

class Person6 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person3 = new Person6('Asabeneh', 'Yetayeh')
  const person4 = new Person6('Lidiya', 'Tekle')
  const person5 = new Person6('Abraham', 'Yetayeh')
  
  console.log(person3)
  console.log(person4)
  console.log(person5)

//   En utilisant la classe Person, nous avons créé un objet trois personnes. Comme vous pouvez le voir, notre classe n'a pas beaucoup de propriétés, ajoutons plus de propriétés à la classe.

class Person9 {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person10 = new Person9('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  
  console.log(person10)

//   Valeurs par défaut avec le constructeur
// Les propriétés de la fonction constructeur peuvent avoir une valeur par défaut comme les autres fonctions régulières.

class Person12 {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person11 = new Person12() // it will take the default values
  const person21 = new Person12('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person11)
  console.log(person21)

//   Méthodes de classe
// Le constructeur à l'intérieur d'une classe est une fonction intégrée qui nous permet de créer un plan pour l'objet. Dans une classe, nous pouvons créer des méthodes de classe. Les méthodes sont des fonctions JavaScript à l'intérieur de la classe. Créons quelques méthodes de classe.
class Person15 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person13 = new Person15('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person23 = new Person15('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person13.getFullName())
  console.log(person23.getFullName())

//   Propriétés avec valeur initiale
// Lorsque nous créons une classe pour certaines propriétés, nous pouvons avoir une valeur initiale. Par exemple, si vous jouez à un jeu, votre score de départ sera nul. Ainsi, nous pouvons avoir un score de départ ou un score qui est nul. Autrement dit, nous pouvons avoir une compétence initiale et acquérir une certaine compétence après un certain temps.

class Person20 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person15 = new Person20('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person25 = new Person20('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person15.score)
  console.log(person25.score)
  
  console.log(person15.skills)
  console.log(person25.skills)

//   getter
// La méthode get nous permet d'accéder à la valeur de l'objet. Nous écrivons une méthode get en utilisant le mot-clé get suivi d'une fonction. Au lieu d'accéder aux propriétés directement depuis l'objet, nous utilisons getter pour obtenir la valeur. Voir l'exemple ci-dessous

class Person30 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
  }
  
  const person16 = new Person30('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person26 = new Person30('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person16.getScore) // We do not need parenthesis to call a getter method
  console.log(person26.getScore)
  
  console.log(person16.getSkills)
  console.log(person26.getSkills)

//   setter
// La méthode setter nous permet de modifier la valeur de certaines propriétés. Nous écrivons une méthode setter en utilisant un jeu de mots-clés suivi d'une fonction. Voir l'exemple ci-dessous.

class Person18 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person19 = new Person18('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person29 = new Person18('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  person19.setScore = 1
  person19.setSkill = 'HTML'
  person19.setSkill = 'CSS'
  person19.setSkill = 'JavaScript'
  
  person29.setScore = 1
  person29.setSkill = 'Planning'
  person29.setSkill = 'Managing'
  person29.setSkill = 'Organizing'
  
  console.log(person19.score)
  console.log(person29.score)
  
  console.log(person19.skills)
  console.log(person29.skills)

//   Ne soyez pas intrigué par la différence entre une méthode régulière et un getter. Si vous savez créer une méthode régulière, vous êtes bon. Ajoutons une méthode régulière appelée getPersonInfo dans la classe Person.

class Persona {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const person1a = new Persona('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2a = new Persona('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  const person3a = new Persona('John', 'Doe', 50, 'Mars', 'Mars city')
  
  person1a.setScore = 1
  person1a.setSkill = 'HTML'
  person1a.setSkill = 'CSS'
  person1a.setSkill = 'JavaScript'
  
  person2a.setScore = 1
  person2a.setSkill = 'Planning'
  person2a.setSkill = 'Managing'
  person2a.setSkill = 'Organizing'
  
  console.log(person1a.getScore)
  console.log(person2a.getScore)
  
  console.log(person1a.getSkills)
  console.log(person2a.getSkills)
  console.log(person3a.getSkills)
  
  console.log(person1a.getPersonInfo())
  console.log(person2a.getPersonInfo())
  console.log(person3a.getPersonInfo())

//   Méthode statique
// Le mot clé static définit une méthode statique pour une classe. Les méthodes statiques ne sont pas appelées sur les instances de la classe. Au lieu de cela, ils sont sollicités auprès de la classe elle-même. Il s'agit souvent de fonctions utilitaires, telles que des fonctions permettant de créer ou de cloner des objets. Un exemple de méthode statique est Date.now() . La méthode now est appelée directement depuis la classe.

class Persone {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
  
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
  }
  
  console.log(Persone.favoriteSkill())
  console.log(Persone.showDateTime())

//   Héritage
// Grâce à l'héritage, nous pouvons accéder à toutes les propriétés et méthodes de la classe parent. Cela réduit la répétition du code. Si vous vous en souvenez, nous avons une classe parent Person et nous allons créer des enfants à partir de celle-ci. Notre classe d'enfants pourrait être étudiante, enseigner, etc.

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
  console.log(s1)
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())

// Méthodes de remplacement
// Comme vous pouvez le voir, nous parvenons à accéder à toutes les méthodes de la classe Personne et nous les avons utilisées dans la classe enfant Student. Nous pouvons personnaliser les méthodes parents, nous pouvons ajouter des propriétés supplémentaires à une classe enfant. Si nous voulons personnaliser les méthodes et si nous voulons ajouter des propriétés supplémentaires, nous devons également utiliser la fonction constructeur de la classe enfant. Dans la fonction constructeur, nous appelons la fonction super() pour accéder à toutes les propriétés de la classe parent. La classe Person n'avait pas de genre, mais attribuons maintenant la propriété de genre à la classe enfant, Student. Si le même nom de méthode est utilisé dans la classe enfant, la méthode parent sera remplacée.

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''
//     let pronoun = this.gender == 'Male' ? 'He' : 'She'

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//     return info
//   }
// }

// const s1 = new Student(
//   'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )
// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())