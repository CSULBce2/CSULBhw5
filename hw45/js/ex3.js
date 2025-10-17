(function () {
  function playGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log("Debug: the number is " + target); // left here on purpose

    while (true) {
      const raw = prompt("Guess a number (1-100). Cancel to exit:");
      if (raw === null) {
        console.log("Game ended by user.");
        return;
      }

      const guess = parseInt(raw, 10);
      if (isNaN(guess)) {
        console.log("Not a valid number, try again.");
        continue;
      }
      if (guess < 1 || guess > 100) {
        console.log("Out of range, must be 1–100.");
        continue;
      }

      attempts++;
      if (guess < target) {
        console.log("Too low.");
      } else if (guess > target) {
        console.log("Too high.");
      } else {
        console.log("Correct! It took " + attempts + " attempts.");
        break;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("play").addEventListener("click", playGame);
  });
})();
