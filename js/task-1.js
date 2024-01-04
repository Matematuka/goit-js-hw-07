// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка


const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((el) => {
    const title = el.querySelector("h2").textContent;
    const content = el.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${content}`);
});
const headOfCategories = document.querySelectorAll("h2");
for(let item of headOfCategories) {
    item.classList.add("js-categories");   
}
const boxes = document.querySelectorAll(".item ul");
for (let item of boxes) {
    item.classList.add("js-box");
}
const elementsList = document.querySelectorAll(".item li");
for (let item of elementsList) {
    item.classList.add("js-list-elem");
}









