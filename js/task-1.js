// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка


const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
const firstCategory = document.querySelector(".item");
const nameOfFirstCategory = firstCategory.firstElementChild.textContent;
console.log(`Category: ${nameOfFirstCategory}`);
const animals = firstCategory.lastElementChild;
const animalsCount = animals.childElementCount;
console.log(`Elements: ${animalsCount}`);

const secondCategory = firstCategory.nextElementSibling;
const nameOfSecondCategory = secondCategory.firstElementChild.textContent;
console.log(`Category: ${nameOfSecondCategory}`);
const products = secondCategory.lastElementChild;
const productsCount = products.childElementCount;
console.log(`Elements: ${productsCount}`);

const thirdCategory = secondCategory.nextElementSibling;
const nameOfThirdCategory = thirdCategory.firstElementChild.textContent;
console.log(`Category: ${nameOfThirdCategory}`);
const technologies = thirdCategory.lastElementChild;
const technologiesCount = technologies.childElementCount;
console.log(`Elements: ${technologiesCount}`);








