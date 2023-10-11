let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("mail");
let telephone = document.getElementById("telephone");
let ajouter = document.getElementById("ajouter");

let modifier = document.getElementById("modifier");

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
  prenom.value = "";
  nom.value = "";
  email.value = "";
  telephone.value = "";
  console.log(utilisateurs);
  users.innerHTML = "";
  utilisateurs.forEach((element) => {
    users.innerHTML += `<tr><td>${element.prenom}</td><td>${element.nom}</td><td>${element.email}</td><td>${element.telephone}</td><td><button onclick ="editer()">Modifier</button><button onclick = "supprimer()">Supprimer</button></td></tr>`;

  });
});

function supprimer() {
    users.removeChild() 
}
function editer(index) {
    modifier.style.display = "block"
    ajouter.style.display = "none"
}
