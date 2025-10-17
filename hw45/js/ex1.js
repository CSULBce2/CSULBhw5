(function () {
  function checkNum() {
    let raw = prompt("Enter a number between 1 and 100:");
    if (raw === null) {
      console.log("Input cancelled.");
      return;
    }

    raw = raw.trim();
    const validInt = /^-?\d+$/.test(raw);
    let num = validInt ? Number(raw) : NaN;

    if (Number.isInteger(num) && num >= 1 && num <= 100) {
      console.log("Thanks, " + num + " is valid.");
    } else {
      console.log("Invalid input: " + raw);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("run").addEventListener("click", checkNum);
  });
})();
