import displayMessage from "./displayMessage.js";
export function createProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";
  if (products.length === 0) {
    displayMessage("message", "No products found", ".products");
  }

  products.forEach(function (product) {
    productsContainer.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-3 products__card" style="width: 12rem;">
						 <img src="${product.image_url}" alt="${product.title}" class="products__img">							
						 <h5 class="products__title">${product.title}</h5>      
						 <p class="products__price">${product.price} NOK</p>
					<a href="./details.html?id=${product.id}" class="btn btn--primary btn--sm products__button">
						 Details
					</a>
			 </div>`;
  });
}
