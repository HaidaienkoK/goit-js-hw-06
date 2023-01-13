function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
let colorEl = document.querySelector('.color');


btnChangeColor.addEventListener('click', () => {
  colorEl.textContent = "";
  let nextColor = getRandomHexColor();
  colorEl.textContent += "- " + nextColor;
  bodyEl.style.backgroundColor = nextColor;
});
