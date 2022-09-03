//За допомогою "element.querySelector(selector)"
// знаходимо елементи "#name-input" та "#name-output"
//(обов’язково ставимо) знак "#")

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
// Додаємо слухача подій на елемент за допомогою
// методу element.addEventListener(event, handler, options)
textInput.addEventListener("input", (event) => {
  // Вирішуємо завдання за допомогою "if else"

  // Якщо Іnput (строка) не пустий, то текст в Input записується в графу
  // замість "Anonymous"

  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
    // якщо ж текст в Input пустий, то записується "Anonymous"
  } else {
    output.textContent = "Anonymous";
  }
  console.log(output.textContent);
});

// Вирішуємо завдання за допомогою тернарного оператора

// Якщо строка (input) не пуста (умова правдива), то ця строка (input)
//  записується замість "Anonymous", якщо "ні", то записується "Anonymous"
/* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна> */

// output.textContent = event.currentTarget.value
//   ? event.currentTarget.value
//   : "Anonymous";

// Теорія (для себе):
// event.currentTarget - елемент, на якому виконується обробник події.

// Теорія (для себе):
// Деякі властивості об'єкта події:

// - Параметр "event" - це і є об'єкт події, який автоматично
// передається першим аргументом під час виклику колбек - функції
// - event.currentTarget - елемент, на якому виконується обробник події.
// - без ".value" - замість текста буде записано
// "[object HTMLInputElement]"

// - "elem.textContent" повертає текстовий контент всередині елемента

// - метод "addEventListener" додає слухача подій на елемент
// element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
