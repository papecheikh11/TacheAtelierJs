// Le service Picsum permet d'obtenir des images libres de droit depuis une adresse web. Par exemple, le lien ci-dessous affiche l'image avec l'identifiant #42 en résolution 350x350 :
// https://picsum.photos/id/42/350/350

// A l'aide de ce service, insérer dans la page HTML 12 images alétoires depuis le service Picsum.
let affiche = "";
let nbr = 5;
for (let i = 1; i <= nbr; i++) {
  affiche += '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
document.body.innerHTML = affiche;
