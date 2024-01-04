// Є input, у який користувач вводить бажану кількість елементів. 
// Після натискання на кнопку Create має рендеритися(додаватися в 
// DOM) колекція з відповідною кількістю елементів і очищатися 
// значення в інпуті.При повторному натисканні на кнопку Create 
// поверх старої колекції має рендеритись нова.Після натискання 
// на кнопку Destroy колекція елементів має очищатися.


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const myInput = document.querySelector("#controls").firstElementChild;

myInput.addEventListener("input", handleInput);
function handleInput(evt) {
  const count = evt.target.value;
}


function createBoxes(amount) {
  if (amount >= 1 && amount <= 100)
  {

  }
}
 
// createBtn.addEventListener("click", handleClick);
// function handleClick(evt) {
  
//   evt.target.reset();
//  }

