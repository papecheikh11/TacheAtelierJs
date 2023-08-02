function insererMaListe(balise, EntrerTexte) {
  const container = document.getElementById("container");

  const baliseNote = document.createElement(balise);

  const textnode = document.createTextNode(EntrerTexte);

  baliseNote.append(textnode);

  container.append(baliseNote);
}
console.log(container);
insererMaListe("p", "Mon nom");
insererMaListe("h1", "Mon nom");
insererMaListe("section", "Mon nom");
insererMaListe("h3", "Mon nom");
