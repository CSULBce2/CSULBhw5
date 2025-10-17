(() => {
  const words = [
    { term: "Procrastination", definition: "Avoidance of doing a task that needs to be accomplished" },
    { term: "Tautology", definition: "Logical argument constructed so it is irrefutable" },
    { term: "Oxymoron", definition: "Figure of speech that juxtaposes contradictory terms" }
  ];

  const dl = document.createElement("dl");
  words.forEach(({ term, definition }) => {
    const dt = document.createElement("dt");
    const strong = document.createElement("strong");
    strong.textContent = term;
    dt.appendChild(strong);

    const dd = document.createElement("dd");
    dd.textContent = definition;

    dl.appendChild(dt);
    dl.appendChild(dd);
  });

  document.getElementById("content").appendChild(dl);
})();