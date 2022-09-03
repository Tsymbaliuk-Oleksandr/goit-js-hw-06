// Рішення (див.конспект "Події елементів форм", "Подія submit")
//Знаходимо елемент "login-form"
const loginForm = document.querySelector(".login-form");
// Додаємо слухача події на елемент ("login-form")
// "submit" -ім'я події, рядок
// handleSubmit - колбек-функція, яка буде викликана під час настання події.
loginForm.addEventListener("submit", handleSubmit);
// Записуємо колл-бек функцію,
function handleSubmit(event) {
  event.preventDefault(); // де "preventDefault" скасовує дію перезавантаження сторінки
  const {
    // Диструктирізація
    elements: { email, password },
  } = event.currentTarget; // деструктиризуємо функцію
  // Якщо текст в "email" або "password" пусті, то виводимо в консоль...
  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  // Якщо ж текст в "email" або "password" не пусті, то ...
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset(); // "reset"- очищає значення полів!!!
}
