// Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням
//  про те, що 'All form fields must be filled in'.Не додавай на інпути атрибут required,
// валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт
// з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення
// цих інпутів, очищені від пробілів по краях.Для доступу до елементів форми використовуй 
// властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.


const sendForm = document.querySelector("form.login-form");
sendForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const email = evt.target.elements.email.value.trim();
    const password = evt.target.elements.password.value.trim();
    if (email === "" || password === "") {
      alert("All form fields must be filled in");

    } else {
      console.log({ Email: email, Password: password });
      evt.target.reset();
    }
    
}

const formInputs = document.querySelectorAll("input");
for (let item of formInputs) {
  item.classList.add("form-input");
}
const formLables = document.querySelectorAll("lable");
for (let item of formLables) {
  item.classList.add("form-lable");
}
const button = document.querySelector("button");
button.classList.add("form-btn");
  
