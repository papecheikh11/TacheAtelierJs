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