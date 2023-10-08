// Écrivez un code qui peut donner des notes aux étudiants en fonction de leurs scores :
// 80-100, UN
// 70-89,B
// 60-69, C.
// 50-59, D
// 0-49, F

let note = prompt("Veuillez enter votre note");

if (note <= 49) {
  console.log("Vous avez un F ");
} else if (note <= 59) {
  console.log("Vous avez un D ");
} else if (note <= 69) {
  console.log("Vous avez un C ");
} else if (note <= 89) {
  console.log("Vous avez un B ");
} else if (note <= 100) {
  console.log("Vous avez un UN ");
} else {
  console.log("Votre note note n'est pas valide");
}

// Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si la saisie de l'utilisateur est :
// Septembre, octobre ou novembre, la saison est l'automne.
// Décembre, janvier ou février, la saison est l'hiver.
// Mars, avril ou mai, la saison est le printemps
// Juin, juillet ou août, la saison est l'été

let mois = prompt("Entrez le mois");
mois.toLowerCase();

switch (mois) {
  case "septembre":
  case "octobre":
  case " novembre":
    console.log("la saison est l'automne. ");
    break;
  case "decembre":
  case "janvier":
  case "février":
    console.log("la saison est l'hiver.");
    break;
  case "mars":
  case "avril":
  case " mais":
    console.log("la saison est le printemps");
    break;
  case "juin":
  case "juillet":
  case "aout":
    console.log("la saison est l'été");
    break;
  default:
    console.log("Vous n'avez pas saisie de mois");
}

// Vérifiez si un jour est un jour de week-end ou un jour ouvrable. Votre script prendra une journée en entrée.

let jour = prompt("Entrez le jour");
jour.toLowerCase();

switch (jour) {
  case "lundi":
  case "mardi":
  case "mercredi":
  case "jeudi":
  case "vendredi":
    console.log(`${jour} est un jour de travail`);
    break;
  case "Samedi":
  case "Dimanche":
    console.log(`${jour} est un jour du weekend`);
  default:
    console.log("Vous n'avez pas saisie de jour");
}
