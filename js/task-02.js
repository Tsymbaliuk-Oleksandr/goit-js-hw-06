const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Рішння

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li"); // додається "li"
  ingredientEl.textContent = ingredient; // Додаємо кожний елемент в "li"
  ingredientEl.classList.add("item"); //Додаємо "item" в кожну "li"

  return ingredientEl;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsItems); // додає один або декілька елементів після всіх дітей елемента "ingredientsList"
ingredientsList.style.listStyle = "none";
console.log(ingredientsList);

////////////////////////////////////////////////////////////////////////////////

// Другий варіант рішення (метод взятий з конспекту, розділ "Властивість inner HTML", підрозділ "Зміна")

// const list = document.querySelector("#ingredients");

// За допомогою методу "map()" перебираємо масив "ingredients" елементом
// "ingredient", додаємо елемент "li" з клас "item" для кожного інгрідієнта,
// який буде змінювати свою назву "${ingredient}"

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("\n");

// console.log(list);
// За допомогою "innerHTML" перелік інгредієнтів можна показати в браузері
// list.innerHTML = markup; // Перший варіант запису
// list.insertAdjacentHTML("afterbegin", markup); // Другий варіант запису
// list.style.listStyle = "none"; // добавляємо інлайн властивість "listStyle: none" - прибираємо крапки на кожній "li"
