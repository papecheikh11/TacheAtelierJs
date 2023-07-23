class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes = [
  new Episode("Dark Beginnings", 45, true),
  new Episode("The Mystery Continues", 45, false),
  new Episode("An Unexpected Climax", 60, false),
];

for (let episode of episodes) {
  episode.hasBeenWatched = false;
  console.log(episode.hasBeenWatched);
}

for (let episode of episodes) {
  episode.hasBeenWatched = true;
  console.log(episode.hasBeenWatched);
}
