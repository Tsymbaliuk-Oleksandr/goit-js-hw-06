let counterValue = 0;
const value = document.querySelector("#value"); // Цілева кнопка
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
  console.log('Добавляю слухача на кнопку "+"');
  counterValue += 1;
  value.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  console.log('Добавляю слухача на кнопку " - "');
  counterValue -= 1;
  value.textContent = counterValue;
});
console.log("counterValue", counterValue);
