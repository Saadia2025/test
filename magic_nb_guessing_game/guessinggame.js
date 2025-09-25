// Attendre que le document soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
  // Obtenir les références aux éléments HTML
  const userGuessInput = document.getElementById('userGuess');
  const submitButton = document.getElementById('submit');
  const instructionsParagraph = document.getElementById('instructions');

  // Vérifier si les éléments existent avant de continuer
  if (!userGuessInput || !submitButton || !instructionsParagraph) {
    console.error("Erreur : Impossible de trouver un ou plusieurs éléments HTML. Assurez-vous que les IDs sont corrects.");
    return;
  }

  // Générer un nombre aléatoire entre 1 et 100
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guessCount = 0;

  // Définir les instructions initiales
  instructionsParagraph.textContent = '';
  userGuessInput.focus();

  // Fonction pour gérer la supposition de l'utilisateur
  function checkGuess() {
    const userGuess = parseInt(userGuessInput.value, 10);
    guessCount++;

    // Vérifier si l'entrée est un nombre valide
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      instructionsParagraph.textContent = '';// enter Guessing number
      userGuessInput.value = '';
      return;
    }

    // Fournir des commentaires à l'utilisateur
    if (userGuess === secretNumber) {
      instructionsParagraph.textContent = `great ! `;
      submitButton.disabled = true;
    } else if (userGuess < secretNumber) {
      instructionsParagraph.textContent = 'Too low ! try.';
    } else {
      instructionsParagraph.textContent = 'Too heigh ! try.';
    }

    // Effacer l'entrée et la mettre au point pour la prochaine supposition
    userGuessInput.value = '';
    userGuessInput.focus();
  }

  // Ajouter un écouteur d'événement au bouton de soumission
  submitButton.addEventListener('click', checkGuess);

  // Autoriser la touche "Entrée" à soumettre la supposition
  userGuessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });
});

