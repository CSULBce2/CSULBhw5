(() => {
  const isInt = (s) => /^-?\d+$/.test((s ?? "").trim());
  const show = (html) => { document.getElementById("content").innerHTML = html; };

  function run() {
    const a = prompt("Enter the first integer:");
    const b = prompt("Enter the second integer:");

    const hasDot = (s) => (s ?? "").includes(".");
    const hasAlpha = (s) => /[a-z]/i.test(s ?? "");

    if (!isInt(a) || !isInt(b)) {
      let reason = "Error — Invalid input";
      if (hasAlpha(a) || hasAlpha(b)) reason = "Error — Alphanumeric input";
      else if (hasDot(a) || hasDot(b)) reason = "Error — Decimal input";
      show(`<span class="redbold">${reason}:</span> "${a}", "${b}"`);
      return;
    }

    const sum = parseInt(a, 10) + parseInt(b, 10);
    show(`Sum: <span class="redbold">${sum}</span>`);
  }

  document.getElementById("run").addEventListener("click", run);
})();