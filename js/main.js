"use strict";

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

  if (usernameValue === "" || usernameValue.length < 2) {
    setError(username, "Error: username cannot be empty");
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Error: password cannot be empty");
  }
  // else {
  //   setSuccess(password);
  // }

  if (password2Value === "") {
    setError(password2, "Please, retype the password");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords don't match");
  } else {
    setSuccess(password && password2);
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

// immediatally invoked functions
