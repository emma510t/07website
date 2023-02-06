//https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  //purchase
  document.querySelector(".purchase h2").textContent = product.productdisplayname;
  document.querySelector(".purchase .brand").textContent = product.brandname;
  document.querySelector(".purchase .articletype").textContent = product.articletype;
  document.querySelector(".purchase .gender").textContent = product.gender;
  document.querySelector(".purchase .price").textContent = product.price;
  //info
  document.querySelector(".info .description").innerHTML = product.description;
  document.querySelector(".info .productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".info .productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".info .basecolour").textContent = product.basecolour;
  document.querySelector(".info .productionyear").textContent = product.productionyear;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info .brandbio").textContent = product.brandbio;
  document.querySelector(".info img").src = product.brandimage;
  document.querySelector(".info img").alt = product.brandname;
}
/*
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
} 
*/
