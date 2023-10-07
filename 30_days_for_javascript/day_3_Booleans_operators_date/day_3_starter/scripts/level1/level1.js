// Déclarez la variable firstName, lastName, country, city, age, isMarried, year et attribuez-lui une valeur et utilisez l'opérateur typeof pour vérifier différents types de données.

let firstName = 'Pape Cheikh'
let lastName = 'Ndiaye'
let country = 'Senegal'
let city = 'Dakar'
let age = 28
let isMarried = false

let moi = [firstName, lastName, country, city, age, isMarried];
man.forEach(function (element) {
    console.log(typeof element);
});

// Vérifiez si le type de « 10 » est égal à 10
console.log("10" === 10)

// Vérifiez si parseInt('9.8') est égal à 10
console.log(parseInt(9.8) === 10);

let isLightOn = true
let isRaining = false



console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3


console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 >= 3)             // false, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2



let resultat1 = 4 > 3
let resultat2 = 4 >= 3
let resultat3 = 4 < 3
let resultat4 = 4 <= 3
let resultat5 = 4 == 4
let resultat6 = 4 === 4
let resultat7 = 4 != 4
let resultat8 = 4 !== 4
let resultat9 = 4 != '4'
let resultat10 = 4 == '4'
let resultat11 = 4 === '4'

console.log(resultat1);
console.log(resultat2);
console.log(resultat3);
console.log(resultat4);
console.log(resultat5);
console.log(resultat6);
console.log(resultat7);
console.log(resultat8);
console.log(resultat9);
console.log(resultat10);
console.log(resultat11);



let python = 'python';
let jargon = 'jargon';

let Comparaison = python.length == jargon.length; // comparaison vrai

console.log(Comparaison); // true

// Creating a time object
const now = new Date()
console.log(now) 

// Getting full year
console.log(now.getFullYear()) 

// Getting month
console.log(now.getDate()) 

// Getting date
console.log(now.getDate()) 

// Getting day
console.log(now.getDay()) 

// Getting minutes
console.log(now.getMinutes())

// Getting seconds
console.log(now.getSeconds()) 


const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 