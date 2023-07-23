// //Declaration de variables avec let

// let numberOfEpisodes = 12;
// let numberOfSeasons = 6;

// //Declaration des trois constantes

// const hoursPerDay = 24;
// const minutesPerHour = 60;
// const SecondsPerMinute = 60;

// let integerCalculation = 1 + 2;  // donne 3
// let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004

// //Declaration des booleens

// let userIsSignedIn = true;
// let userIsAdmin = false;

// //Declaration des chaines de caracteres

// let firstName = "Will";
// let lastName = 'Alexander';

// //La concatenation

// let wholeName = firstName + " " + lastName;  // valeur: "Will Alexander"

// const myName = `Alexander`;
// const salutation = `Bienvenue sur mon site ${myName}!`;
// console.log(salutation);   //retournera “Bienvenue sur mon site Alexander!”

// Commençons a pratiquer

let episode = {
  episodeTitle: "contexteHistorique",
  episodeDuration: 35,
  hasBeenWatched: true,
};

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("originaire", 37, true);
let secondEpisode = new Episode("enter en action", 38, false);
let thirdEpisode = new Episode("la fameuse actrice", 35, false);

//creation de la variable episodes

let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);

episodes.pop();

let numberOfEpisodes = episodes.length;

console.log(episodes);
console.log(numberOfEpisodes);
