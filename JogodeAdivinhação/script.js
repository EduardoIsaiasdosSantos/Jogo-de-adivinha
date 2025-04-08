let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;

  while (attempts > 0) {
    if (guess == randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "finalmente né, não fez mais do que a sua obrigação!";
    break;

    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Muito baixo, da uma aumentada ai seu rato!!!. ${attempts} Tentativas restantes..`;
      break;

    } else {
      feedbackElement.innerHTML = `Muito alto, da uma diminuida ai por favor!!! Tente novamente. ${attempts} Tentativas restantes`;
      break;
    }
  }
    if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML =
      `você errou tudo, gastou todas as tentativas(muito burro)! O número correto era  ${randomNumber}.`;
    feedbackElement.style.color = "red";
  }
} 

