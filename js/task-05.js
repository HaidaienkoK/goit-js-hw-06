let outName = document.querySelector("#name-output");
let inInput = document.querySelector("#name-input");

inInput.addEventListener("input", () => {
  if (inInput.value === "") {
    outName.innerHTML = "Anonymous";
  } else {
    outName.innerHTML = inInput.value;
  }
});
