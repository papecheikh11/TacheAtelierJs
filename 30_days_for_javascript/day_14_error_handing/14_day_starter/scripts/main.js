// La gestion des erreurs
// JavaScript est un langage peu typé. Parfois, vous obtiendrez une erreur d'exécution lorsque vous essayez d'accéder à une variable non définie ou d'appeler une fonction non définie, etc.

// JavaScript similaire à Python ou Java fournit un mécanisme de gestion des erreurs pour détecter les erreurs d'exécution à l'aide du bloc try-catch-finally.

try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
  }

//   try : encapsulez le code suspect susceptible de générer une erreur dans le bloc try. L'instruction try nous permet de définir un bloc de code à tester pour les erreurs pendant son exécution.

// catch : écrivez du code pour faire quelque chose dans le bloc catch lorsqu'une erreur se produit. Le bloc catch peut avoir des paramètres qui vous donneront des informations sur les erreurs. Le bloc Catch est utilisé pour enregistrer une erreur ou afficher des messages spécifiques à l'utilisateur.

// final : le bloc final sera toujours exécuté quelle que soit l'apparition d'une erreur. Le bloc final peut être utilisé pour terminer la tâche restante ou réinitialiser les variables qui auraient pu changer avant qu'une erreur ne se produise dans le bloc try.

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }

//   Le bloc catch prend un paramètre. Il est courant de passer e, err ou error en tant que paramètre au bloc catch. Ce paramètre est un objet et il possède des clés de nom et de message. Utilisons le nom et le message.

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

//   throw : l'instruction throw nous permet de créer une erreur personnalisée. Nous pouvons le faire via une chaîne, un nombre, un booléen ou un objet. Utilisez l'instruction throw pour lever une exception. Lorsque vous lancez une exception, expression spécifie la valeur de l'exception. Chacun des éléments suivants lève une exception :

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()

//   Types d'erreurs
// ReferenceError : une référence illégale s'est produite. Une ReferenceError est levée si nous utilisons une variable qui n'a pas été déclarée.

let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)

// SyntaxError : une erreur de syntaxe s'est produite
let square = 2 * 2
console.log(square)
console.log("Hello, world")

// TypeError : une erreur de type s'est produite
let num = 10
console.log(num.toLowerCase())