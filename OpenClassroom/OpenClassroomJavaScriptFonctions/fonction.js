const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length;
};

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

console.log(colinAverage);

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }

  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }

    this.averageRating = sum / this.ratings.length;
  }
}

const generateComponent = (show) => {
  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + " seasons";
  const episodesText = show.episodesPerSeason + " episodes per season";
  return {
    titleText,
    seasonsText,
    episodesText,
  };
};
const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// fonction factoriel

//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let number;

//======FONCTION À ECRIRE======
function factorielle(number) {
  if (number <= 1) return 1;
  else return number * factorielle(number - 1);
}
//======/FONCTION À ECRIRE======

function onCalcul() {
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  number = parseInt(numberInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(number)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
}
