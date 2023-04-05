const prixlot = Math.floor(Math.random() * 100); //0.12648456468464
let nombre;
let essai = 0;

checkBtn.addEventListener("click", function (e) {
  console.log(e);

  e.preventDefault(); // empeche de recharger la page à la validation du formulaire
  nombre = parseInt(document.querySelector("#priceInput").value);

  if (nombre >= 0 && nombre <= 100 && essai <= 7) {
    if (nombre === prixlot) {
      alert("Bravo, c'est le juste prix");
      return true; // on a gagné, pas besoin de continuer
    }
    essai++;
    if (nombre < prixlot) {
      alert("plus");
    }
    if (nombre > prixlot) {
      alert("moins");
    }
  } else {
    if (essai >= 7) {
      alert("Perdu, vous n'avez trouvé le prix.");
    } else {
      alert("Votre saisie n'est pas bonne");
    }
  }
});
