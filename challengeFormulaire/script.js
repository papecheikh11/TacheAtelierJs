let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("mail");
let telephone = document.getElementById("telephone");
let ajouter = document.getElementById("ajouter");



let users = document.getElementById("users");
let utilisateurs = [];

ajouter.addEventListener("click", function () {
  let utilisateur = {
    prenom: prenom.value,
    nom: nom.value,
    email: email.value,
    telephone: telephone.value,
  };

  utilisateurs.push(utilisateur);
  console.log(utilisateurs);

  users.innerHTML += `<tr><td>${utilisateur.prenom}</td><td>${utilisateur.nom}</td><td>${utilisateur.email}</td><td>${utilisateur.telephone}</td><td><button>Modifier</button><button>Supprimer</button></td>`;
});
