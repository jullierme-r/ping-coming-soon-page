"use strict";

let button = document.querySelector(".btn");
let email = document.getElementById("email");
let responseArea = document.querySelector(".validation-fail");

// possible errors
let emptyError = "Whoops! It looks like you forgot to add your email";
let invalidError = "Please provide a valid email address";

function validateEmail () {
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //expression to validate

    responseArea.textContent = "";
    if(email.value === "") { //if left blank
        responseArea.textContent += emptyError;
        responseArea.style.display = "block";
        email.classList.add("border-error");
    } else if(email.value.match(regex)) { //if have any value and its valid
        email.classList.remove("border-error");
    } else { //if the value it's not valid
        responseArea.textContent += invalidError;
        responseArea.style.display = "block";
        email.classList.add("border-error");
    }
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    validateEmail();
});
