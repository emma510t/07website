fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  console.log(products);
  products.forEach((product) => showProduct(product));
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#small_product_template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre i indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector(".subtle_info .brand").textContent = product.brandname;
  copy.querySelector(".subtle_info .articletype").textContent = product.articletype;
  copy.querySelector(".subtle_info .gender").textContent = product.gender;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".procent").textContent = product.discount;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sold_out");
  }
  //produktet til sale
  if (product.discount) {
    //produktet er udsolgt
    copy.querySelector(".discounted").classList.add("procent");
    copy.querySelector(".discounted").classList.remove("hide");
    copy.querySelector(".price").classList.add("old_price");
  }

  copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}

/* 
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}

 <article class="sma'll_product">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp" alt="productdisplayname">
                    <h3>productdisplayname</h3>
                    <p class="subtle_info">brand | articletype | gender</p>
                    <p class="price">DKK price</p>
                    <div class="discounted">
                        <p></p>
                        <p></p>
                    </div>
                    <a href="product.html">View product</a>
                </article>
*/
