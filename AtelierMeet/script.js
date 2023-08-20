const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", creer);
function creer() {
  let leTexte = document.querySelector("#letexte").value;
  const affichage = document.getElementById("affichage");
  const Faffichage = document.getElementById("Faffichage");
  const maBalise = document.querySelector("#mabalise").value.toLowerCase();

  let baliseValide =
    /^(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)$/.test(
      maBalise
    );
  if (baliseValide) {
    const creerBalise = document.createElement(maBalise);
    creerBalise.innerHTML = leTexte;
    affichage.append(creerBalise);
    affichage.style.color = "green";
    affichage.style.fontSize = "1em";
  } else {
    Faffichage.textContent =
      "La balise <" +
      maBalise +
      "> n'est pas une balise HTML valide. Veuillez entrer une balise";
    Faffichage.style.color = "red";
    Faffichage.style.fontSize = "1em";
  }
  document.getElementById("mabalise").value = "";
  document.getElementById("letexte").value = "";
  console.log(maBalise);
}
