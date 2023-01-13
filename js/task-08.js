const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля форми повинні бути заповнені!");
  }
  const dataSend = { email: email.value, password: password.value };
  console.log(dataSend);
  event.currentTarget.reset();
}
