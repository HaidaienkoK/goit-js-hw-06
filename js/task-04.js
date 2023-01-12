
let counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decr = document.querySelector("[data-action='decrement']");
const incr = document.querySelector("[data-action='increment']");

decr.addEventListener("click", decrement);
incr.addEventListener("click", increment);

function decrement() {
  counterValue.textContent -= 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
