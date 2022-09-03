function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
////////////////////////////////////////////////////////////////////////////
// const refs = {
//   onChangeColor: document.querySelector(".change-color"),
//   onColor: document.querySelector(".color"),
// };

// refs.onChangeColor.addEventListener("click", setColor);
// function setColor() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   refs.onColor.textContent = getRandomHexColor();
// }

// Інший запис:

const onChangeColor = document.querySelector(".change-color");
const onColor = document.querySelector(".color");

onChangeColor.addEventListener("click", setColor);

function setColor() {
  const bkColor = getRandomHexColor();
  // Додаємо на "body" стиль "backgroundсolor"
  document.body.style.backgroundColor = bkColor;
  // "color" записуємо як текст
  onColor.textContent = bkColor;
}
