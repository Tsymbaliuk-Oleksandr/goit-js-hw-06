const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//////////////////////////////////////////////////////////////////////////

// Рішення (метод взятий з конспекту, розділ "Властивість inner HTML", підрозділ "Зміна")

// Знаходимо клас "class="gallery" тега "ul" для можливосты формування списка "li"

const galleryList = document.querySelector(".gallery");
// Перебираємо масив за допомогою методу "map()"і складаємо один рядок з
// HTML - тегами, який потім записуємо в innerHTML елемента.
const imagesItems = images
  .map((image) => `<li><img src=${image.url}, alt=${image.alt}></li>`)
  .join("\n");

galleryList.insertAdjacentHTML("beforeend", imagesItems);

const galleryItem = document.querySelectorAll("li").forEach((el) => {
  el.classList.add("gallery__item");
});
galleryList.style.listStyle = "none"; // добавляємо інлайн властивість "listStyle: none" - прибираємо крапки на кожній "li"
galleryList.style.display = "flex"; // добавляємо інлайн властивість "display: flex" - картинки - з ліва на право
console.log(imagesItems);

//////////////////////////////////////////////////////////////////////////

// Другий метор рішення

// const imagesItems = images.map((image) => {
//   const imageEl = `<li>
//       <img src="${image.url}" alt="${image.alt}">
//     </li>`;
//   return imageEl;
// });
// const galleryList = document.querySelector(".gallery");
// galleryList.insertAdjacentHTML("afterbegin", imagesItems);
// galleryList.style.display = "flex";
// galleryList.style.listStyle = "none";

// const galleryItem = document.querySelectorAll("li").forEach((el) => {
//   el.classList.add("gallery__item");
// });

//////////////////////////////////////////////////////////////////////////

//// Теорія (для себе)
// створюємо тег "img"
// const imgEl = document.createElement("img");

// imgEl.src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// imgEl.alt = "White and Black Long Fur Cat";
// imgEl.width = 640;
// document.body.appendChild(imgEl);
// console.log("imgEl", imgEl);

// // створюємо тег "li"
// const itemEl = document.createElement("li");
// // додаємо в тег "li" клас
// // itemEl.append("Котики"); // додається текс в середину тега "li"
// itemEl.classList.add("site_item");
// const linkEl = document.createElement("a");
// itemEl.classList.add("site_link");
// // linkEl.textContent = "Котики"; // додається текс в середину тега "а"
// console.log(itemEl);
// console.log(linkEl);

// // додаємо тег "а" в середину тега "li"
// itemEl.appendChild(linkEl);
// console.log(itemEl);

// const gallery = document.querySelector(".gallery");
// gallery.appendChild(itemEl);
// console.log(gallery);
