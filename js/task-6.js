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

// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const myInput = document.querySelector("#controls").firstElementChild;

// myInput.addEventListener("input", handleInput);
// function handleInput(evt) {
//   const count = evt.target.value;
// }


// function createBoxes(amount) {
//   if (amount >= 1 && amount <= 100)
//   {

//   }
// }
 
// createBtn.addEventListener("click", handleClick);
// function handleClick(evt) {
  
//   evt.target.reset();
//  }

const num = document.querySelector("input");
const btnCreate = controls.querySelector("button[data-create]");
const btnDestroy = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
btnCreate.addEventListener("click", () => {
  let amount = num.value;
  createBoxes(amount);
});
function createBoxes(amount) {
  let wid = 30;
  let hig = 30;
  let a = 1;
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      if (i > 0) {
        wid += 10;
        hig += 10;
        a += 1;
      }
      let item = document.createElement("div");
      item.style.width = wid + "px";
      item.style.height = hig + "px";
      item.textContent = a;
      item.style.textAlign = "center";
      item.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(item);
    }
    boxes.appendChild(fragment);
  }
  num.value = "";
}
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}