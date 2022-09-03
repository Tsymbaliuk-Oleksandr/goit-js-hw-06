//Знаходимо елемент "validation-input"
const inputEl = document.querySelector("#validation-input");

// Для колбека можна (і бажано) використовувати окрему функцію і передавати
// на неї посилання.Іменована функція підвищує читабельність коду.

function onCheckInputLength(event) {
  // Якщо довжина елемента текстового контенту "value" рівна числу (довшині шести символів(в конспекті "data-атрибути"))
  // то об’єкт події "event" елементу на якому виконується обробник події
  // "event.currentTarget" видаляє "classList.remove" або додає "classList.add" колір
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    event.currentTarget.classList.remove("invalid"); //classList.remove видаляє "#validation-input.invalid"
    event.currentTarget.classList.add("valid"); // classList.add додає "#validation-input.valid"
  } else {
    event.currentTarget.classList.remove("valid"); //classList.remove видаляє "#validation-input.valid"
    event.currentTarget.classList.add("invalid"); // classList.add додає "#validation-input.invalid"
  }
}

// Додаємо даний слухача події до елемента елемента "inputEl",
// де "blur"- це ім'я події, рядок, а onCheckInputLength - це колбек-функція
inputEl.addEventListener("blur", onCheckInputLength);

// Теорія:
// element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// (до додинадцятої строчки )Для отримання значення data-атрибута використовується властивість dataset,
// після якого стоїть ім'я атрибута. Тобто data- відкидається,
// а інша частина імені записується як ім'я властивості об'єкта.
