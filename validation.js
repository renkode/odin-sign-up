const pwInput = document.querySelector("#user-password");
const confirmPwInput = document.querySelector("#confirm-password");
const errMessage = document.querySelector(".error-message");

pwInput.addEventListener("keyup", validatePw);
confirmPwInput.addEventListener("keyup", validatePw);

function validatePw() {
  if (confirmPwInput.value !== pwInput.value) {
    confirmPwInput.classList.add("error");
    pwInput.classList.add("error");
    errMessage.style.visibility = "visible";
  } else {
    confirmPwInput.classList.remove("error");
    pwInput.classList.remove("error");
    errMessage.style.visibility = "hidden";
  }
}
