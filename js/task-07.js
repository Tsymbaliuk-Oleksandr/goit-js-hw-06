// Метод document.getElementById() повертає посилання на елемент, який має атрибут id із зазначеним значенням.

// Примітка: замість методу getElementById() можна використовувати метод querySelector(), який дозволяє проводити пошук елемента, використовуючи будь-який допустимий CSS селектор.
// const fontSizeControl = document.getElementById("font-size-control");
// const text = document.getElementById("text");

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const size = fontSizeControl.value; // "#font-size-control" задаємо текстовим контентом
  console.log(size);

  text.style.fontSize = size + "px"; // тексту ("text") в HTML,
  // ми збільшуємо розмір(піксілів). Тексту додається стиль "font-size", який і змінює кількість пікселів (style="font-size: 74px;")
});
