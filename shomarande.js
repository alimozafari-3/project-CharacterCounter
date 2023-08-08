
const input = document.querySelector(".field-input");
const counter = document.querySelector(".field-counter");
const maxlength = input.getAttribute("maxlength");
counter.innerHTML = maxlength;

input.addEventListener("input", (e) => {
  const valuelength = e.target.value.length;
  const leftcharlength = maxlength - valuelength;
  if (leftcharlength < 0) return;
  counter.innerHTML = leftcharlength;
});