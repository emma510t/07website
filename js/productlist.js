fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json)
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach((product) => showProduct(product));
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#small_product_template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre i indhold
  copy. querySelector("h3").textContent=product.productdisplayname;
if (product.soldout) {
//produktet er udsolgt
    copy.querySelector("article").classList.add("sold_out");
  //appende
  document.querySelector("main").appendChild(copy);
}

/* 
 <article class="small_product">
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
