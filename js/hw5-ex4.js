(() => {
  const ul = document.getElementById("links");
  const isLi = document.getElementById("is");

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "https://www.csulb.edu/college-of-business";
  a.textContent = "College of Business";
  li.appendChild(a);

  ul.insertBefore(li, isLi);
})();