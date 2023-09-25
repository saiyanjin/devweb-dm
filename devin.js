const input = document.getElementById('input');
const button = document.getElementById('valider');
const message = document.getElementById('message');

const nombreMystere = Math.floor(Math.random() * 100) + 1;

let tentatives = 1;

function afficherMessage(texte, couleur) {
  message.textContent = texte;
  message.style.color = couleur;
}

function verifierNombre() {
  const valeurSaisie = parseInt(input.value);

  if (isNaN(valeurSaisie)) {
    afficherMessage("On a dit un nombre entier !!!", "black");
    return;
  }

  if (valeurSaisie < 1 || valeurSaisie > 100) {
    afficherMessage("[" + tentatives + "] Le nombre doit être compris entre 1 et 100", "black");
  } else if (valeurSaisie > nombreMystere) {
    afficherMessage("[" + tentatives + "] C'est moins", "blue");
  } else if (valeurSaisie < nombreMystere) {
    afficherMessage("[" + tentatives + "] C'est plus", "blue");
  } else {
    afficherMessage("[" + tentatives + "] C'est gagné ! Le nombre Mystère était bien " + nombreMystere + ".", "green");
    button.textContent = "Rejouer ?";
    button.removeEventListener('click', verifierNombre);
    button.addEventListener('click', rejouer);
  }

  tentatives++;

  if (tentatives > 6) {
    afficherMessage("[" + 6 + "] C'est perdu ! Le nombre Mystère était " + nombreMystere + ".", "red");
    button.textContent = "Rejouer ?";
    button.removeEventListener('click', verifierNombre);
    button.addEventListener('click', rejouer);
  }
}

function rejouer() {
  tentatives = 0;
  button.textContent = "Essayer";
  input.value = "";
  afficherMessage("");
  nombreMystere = Math.floor(Math.random() * 100) + 1;
  button.removeEventListener('click', rejouer);
  button.addEventListener('click', verifierNombre);
}

button.addEventListener('click', verifierNombre);