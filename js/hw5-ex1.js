(function () {
  const out = document.getElementById("out");
  const lines = [];
  const kids = document.body.childNodes;

  for (let i = 0; i < kids.length; i++) {
    const n = kids[i];
    let line = `${i}: nodeType=${n.nodeType} nodeName=${n.nodeName}`;
    if (n.nodeType === Node.TEXT_NODE) {
      const t = (n.nodeValue || "").replace(/\s+/g, " ").trim();
      line += t ? ` value="${t}"` : " (whitespace)";
    } else if (n.nodeType === Node.ELEMENT_NODE) {
      line += ` <${n.tagName.toLowerCase()}>`;
    }
    lines.push(line);
  }

  out.textContent = lines.join("\n");
})();