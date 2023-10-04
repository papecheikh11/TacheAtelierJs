let utilisateur = document.getElementById("utilisateur");

function addUser() {
  let prenom = document.getElementById("prenom");
  let nom = document.getElementById("nom");
  let email = document.getElementById("mail");
  let telephone = document.getElementById("telephone");

  let utilisateurPrenom = prenom.value;
  let utilisateurNom = nom.value;
  let utilisateurEmail = email.value;
  let utilisateurTelephone = telephone.value;

  if (
    utilisateurPrenom === "" &&
    utilisateurNom === "" &&
    utilisateurEmail === "" &&
    utilisateurTelephone === ""
  ) {
    return;
  }

  let trPrenom = createElement("tr");
  trPrenom.innerHTML = utilisateurPrenom;

  let trNom = createElement("tr");
  trNom.innerHTML = utilisateurPrenom;

  let trEmail = createElement("tr");
  trEmail.innerHTML = utilisateurPrenom;

  let trTelephone = createElement("tr");
  trTelephone.innerHTML = utilisateurPrenom;

  let editButton = document.createElement("button");
  editButton.innerText = "Modifier";

  editButton.onclick = function () {
    editUser(tr)
  }

  let suppButton = document.createElement('button')
    suppButton.innerText = 'Supprimer'

    suppButton.onclick = function(){
        suppUser(tr)
    }


}
