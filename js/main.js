"use strict";

// immediatally invoked functions
// (function () {
//   /* ... */
// })();

const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const error = document.querySelector("small");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  console.log("---------------");
  console.log(usernameValue);
  console.log(passwordValue);
  console.log(password2Value);
  console.log("---------------");

  // username validation
  if (usernameValue === "") {
    setError(username, "Error: username cannot be empty");
  } else if (usernameValue.length < 4) {
    setError(username, "Error: username must contain at least 4 characters");
  } else {
    setSuccess(username);
  }

  // password validation
  if (passwordValue === "") {
    setError(password, "Error: password cannot be empty");
  } else if (passwordValue.length < 5) {
    setError(password, "Error: password must contain at least 5 characters");
  } else {
    setSuccess(password);
  }
  // password match
  if (password2Value === "") {
    setError(password2, "Please, confirm the password");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords don't match");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
