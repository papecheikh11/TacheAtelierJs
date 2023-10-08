// Écrivez un programme qui indique le nombre de jours dans un mois.

let month = prompt("Entrez un mois");
month.toLowerCase();

switch (month) {
  case 'janvier':
  case 'mars':
  case 'mai':
  case 'juillet':
  case 'aout':
  case 'octobre':
  case 'decembre':
    console.log(`${month} a 31 jours`);

    break;

  case 'avril':
  case 'juin':
  case 'septembre':
  case 'novembre':
    console.log(`${month} a 30 jours`);

    break;
    
  case 'fevrier':
    console.log(`${month} a 28 jours`);

  default:
    console.log("Vous n'avez pas saisie de mois");
}
