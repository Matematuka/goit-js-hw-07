// Напиши скрипт, який змінює колір фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і задає це значення 
// кольору текстовим вмістом для span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
const textSpan = document.querySelector("span.color");

btn.addEventListener("click", handleClick);

function handleClick(evt) {
  const changeColor = getRandomHexColor();
  bodyElem.style.backgroundColor = changeColor;
  textSpan.textContent = changeColor;
}

const text = document.querySelector(".widget p");
text.classList.add("hex-color");