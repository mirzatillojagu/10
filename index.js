const username = document.querySelector("#input");
const password = document.querySelector("#input1");
const button = document.querySelector("#button");
const logInPage = document.querySelector("#card");
const realPage = document.querySelector("#open-site-title");
const danger = document.querySelector("#danger");

const correctUsername = "user";
const correctPassword = "123456";

danger.style.display = "none";
realPage.style.display = "none";

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      username.value === correctUsername &&
      password.value === correctPassword
    ) {
      logInPage.style.display = "none";
      realPage.style.display = "block";
      danger.style.display = "none";
    } else {
      username.focus();
      danger.style.display = "block";
    }

    username.value = ""; 
    password.value = ""; 
  });
