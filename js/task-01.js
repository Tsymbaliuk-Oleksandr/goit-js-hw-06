// !!!!!Перший варіант рішення завдання

//// Шукаємо кількість (колекцію) елементів з однаковим селектором
////  зі списка з класом "item"

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

//// Використаємо метод "forEach" для перебирання масиву "Array"
//// та метод функції Call()

Array.prototype.forEach.call(totalCategories, (element) => {
  //// Запишемо заголовок "h2" для кожної "li" за допомогою "innerHTML"

  const titleCategories = element.querySelector("h2").innerHTML;

  //// Порахуємо кількість елементів "li" за допомогою "length"

  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${titleCategories} 
Elements: ${itemsLength}`);
});

//// !!!!!Другий варіант рішення завдання

//// Шукаємо кількість (колекцію) елементів з однаковим селектором
////  зі списка з класом "item"

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);

//// Розпилюємо масив та використовуємо метод map() для трансформації масиву.
//// Використовуємо "textContent" для запису назви "Category" та "length"
//// для кількості елементів в категорії

// const arrayItem = [...totalCategories]
//   .map(
//     (categories) =>
//       `Category: ${categories.children[0].textContent}
//       Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(arrayItem);

////////////////////////////////////////////////////////////////////////////////
// const numberUlCategoriesEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${numberUlCategoriesEl.length}`);

// const nameCategoriesEl = document.querySelectorAll(".item").forEach((el) =>
//   console.log(`Category: ${el.querySelector("h2").textContent}
// Elements: ${el.querySelectorAll("li").length}`)
// );
