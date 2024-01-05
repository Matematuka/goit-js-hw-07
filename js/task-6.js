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


const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const myInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");
createBtn.classList.add("create-btn");
destroyBtn.classList.add("destroy-btn");
myInput.classList.add("js-input");
createBtn.addEventListener("click", () => {
  let amount = myInput.value;
  createBoxes(amount);
});
function createBoxes(amount) {
  let w = 30;
  let h = 30;
  let step = 1;
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      if (i > 0) {
        w += 10;
        h += 10;
        step += 1;
      }
      let item = document.createElement("div");
      item.style.width = w + "px";
      item.style.height = h + "px";
      item.textContent = step;
      item.style.textAlign = "center";
      item.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(item);
    }
    boxes.appendChild(fragment);
  }
  myInput.value = "";
}
destroyBtn.addEventListener("click", () => {
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