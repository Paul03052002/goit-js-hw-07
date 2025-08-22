const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
