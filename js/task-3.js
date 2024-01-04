const textInput = document.querySelector("#name-input");
const greet = document.querySelector("#name-output");
textInput.addEventListener("input", (evt) => {
    if (evt.currentTarget.value.trim() === "") {
        greet.textContent === "Anonymous";
    } else {
        greet.textContent = evt.currentTarget.value.trim();   
    }
});

const hello = document.querySelector("h1");
hello.classList.add("head");