import { createProducts } from "./createProducts.js";

export function createFeaturedProducts(products) {
	const featuredProducts = document.querySelector(".products");

	featuredProducts.innerHTML = "";

	const filteredProducts = products.filter(function (product) {
		if (product.attributes.featured === true) {
			return true;
		}
	});

	createProducts(filteredProducts);
}
