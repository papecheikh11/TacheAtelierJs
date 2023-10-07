// Écrivez un script qui invite l'utilisateur à saisir la base et la hauteur du triangle et à calculer l'aire d'un triangle (aire = 0,5 xbxh).

let base = 20;
let height = 10;
let area = 0.5 * base * height;
console.log(area);

// Écrivez un script qui invite l'utilisateur à saisir le côté a, le côté b et le côté c du triangle et à calculer le périmètre du triangle (périmètre = a + b + c)

let sidea = 5;
let sideb = 4;
let sidec = 3;
let perimeter = sidea + sideb + sidec;
console.log(perimeter);

// Obtenez la longueur et la largeur à l'aide de l'invite et calculez une aire de rectangle (surface = longueur x largeur et périmètre du rectangle (périmètre = 2 x (longueur + largeur))

let surface = sidea * sideb;

perimeter = 2 * (sidea + sideb);

console.log(surface);
console.log(perimeter);

// Obtenez le rayon à l'aide de l'invite et calculez l'aire d'un cercle (aire = pi xrxr) et la circonférence d'un cercle (c = 2 x pi xr) où pi = 3,14.

const pi = 3.14;
let rayon = 10;
let surfaceCercle = rayon * rayon * pi;
let circonference = 2 * pi * rayon;

console.log(`La surface du cercle est de ${surfaceCercle}`);
console.log(`La circonference du cercle est de ${circonference}`);

// Calculer la pente, l'ordonnée à l'origine x et l'ordonnée à l'origine de y = 2x -2

let x0 = prompt("Entrer votre x d'origine");
let y0 = 2 * x * 4;

console.log(`La pente donne comme resultat ${y}`);

// La pente est m = (y 2 -y 1 )/(x 2 -x 1 ). Trouver la pente entre le point (2, 2) et le point (6,10)

let x1 = prompt("Entrer la valeur de x1");
let x2 = prompt("Entrer la valeur de x2");
let y1 = prompt("Entrer la valeur de y1");
let y2 = prompt("Entrer la valeur de y2");

let pente = (y2 - y1) / (x2 - x1);

console.log(`La valeur de la pente est de ${pente}`);

// Comparez la pente des deux questions ci-dessus.

console.log(pente >= y0);

// Calculez la valeur de y (y = x 2 + 6x + 9). Essayez d'utiliser différentes valeurs x et déterminez à quelle valeur x y est 0.

let x = prompt("entrer la valeur de x")

let y = x*x + 6*x + 9

if (x !== 0 && y !==0) {
    prompt("entrer la valeur de x")
}
else{
    y
}


// Écrivez un script qui invite un utilisateur à saisir les heures et le tarif horaire. Calculer le salaire de la personne ?

let hours = 40;
let ratePerHour = 28
let gain =  hours * ratePerHour

console.log(`Your weekly earning is ${gain}`);


// Si la longueur de votre nom est supérieure à 7, disons, votre nom est long, sinon dites que votre nom est court.

let nom  = 'Papa cheikh maguette ndiaye'

if (nom.length > 7) {
    console.log('Votre nom est long');
}
else{
    console.log('Votre nom est court');
}

// Comparez la longueur de votre prénom et la longueur de votre nom de famille et vous devriez obtenir ce résultat.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

console.log(`Your first name, Asabeneh ${firstName.length} is longer than your family name, Yetayeh ${lastName.length}`);


// Déclarez deux variables myAge et yourAge et attribuez-leur des valeurs initiales ainsi que myAge et yourAge.

let myAge = 250
let yourAge = 25

console.log(`I am ${myAge-yourAge} years older than you.`);

// En utilisant l'invite, obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire, sinon dites-lui d'attendre un certain nombre d'années.

let years = Number(prompt("what is your age"));

let seconds = years * 365.25 * 24 * 60 * 60;

console.log(`you lived ${seconds} seconds.`);

// Créez un format d'heure lisible par l'homme à l'aide de l'objet Date Time

// AAAA-MM-JJ HH : mm
// JJ-MM-AAAA HH:mm
// JJ/MM/AAAA HH : mm

let date = new Date();

let year = date.getFullYear();

let month = String(date.getMonth() + 1).padStart(2, '0');

let day = String(date.getDate()).padStart(2, '0');

let heures = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');

// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);

// DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
