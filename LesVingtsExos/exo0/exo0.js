// A l'aide de la fonction prompt(). Insérer dans la page HTML la chaine de caractères inscrites dans la boite de dialogue.

function monMessage() {
  let saisieMot = prompt("Veuillez saisir le mot que vous voulez afficher");

  let para = document.querySelector("p");
  para.innerText = "Votre mot saisie est: " + saisieMot;
}
monMessage();
