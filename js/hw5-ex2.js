document.addEventListener("DOMContentLoaded", () => {
  const out = document.getElementById("out");
  const items = document.getElementsByClassName("400level");
  const lines = Array.from(items, li => li.textContent.trim());
  out.textContent = lines.join("\n");
});
