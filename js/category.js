fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const copy = template.cloneNode(true);
  //ændrer indhold
  copy.querySelector("a").textContent = cat.category;

  copy.querySelector("a").setAttribute("href", `productlist.html?category=${cat.category}`);
  //appender
  document.querySelector(".category_menu ul").appendChild(copy);
}
