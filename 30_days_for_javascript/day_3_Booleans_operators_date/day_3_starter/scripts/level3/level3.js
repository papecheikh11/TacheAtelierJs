//time object
// Créez un format d’heure lisible par l’homme à l’aide de l’objet Date time. L'heure et les minutes doivent toujours être composées de deux chiffres (7 heures doivent être 07 et 5 minutes doivent être 05).
// AAAA-MM-JJ HH:mm par exemple. 20120-01-02 07:05

let date = new Date();

let year = date.getFullYear();

let month = String(date.getMonth() + 1).padStart(2, '0');

let day = String(date.getDate()).padStart(2, '0');

var hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');


// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);