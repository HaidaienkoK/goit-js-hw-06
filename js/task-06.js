const input = document.querySelector("input");
const dataLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (event) => {
  input.classList.add("invalid");
  if (event.currentTarget.value.length === dataLength) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
});
