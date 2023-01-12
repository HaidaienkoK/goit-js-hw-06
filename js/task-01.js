const categoriesEl = document.querySelectorAll("h2");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((itemCategory) => {
  console.log("");
  console.log(`Category: ${itemCategory.textContent}`);
  let elementsInCategory = itemCategory.nextElementSibling.querySelectorAll("li").length;
  console.log(`Elements: ${elementsInCategory}`);
});
