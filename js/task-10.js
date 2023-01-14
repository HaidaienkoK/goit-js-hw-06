function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
let divBoxesEl = document.querySelector("#boxes");
let sizeBox = 30;

btnCreate.addEventListener("click", () => {
  const quantityEl = inputEl.value;
  createBoxes(quantityEl);
});

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i <= amount-1; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.id = "newDiv";
    newDivEl.style.width = sizeBox + "px";
    newDivEl.style.height = sizeBox + "px";
    newDivEl.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(newDivEl);
    sizeBox += 10;
  }
}

btnDestroy.addEventListener("click", () => {
  const divBox = document.querySelectorAll("#newDiv");
  divBox.forEach((element) => {
    sizeBox = 30;
    element.remove();
  });
});
