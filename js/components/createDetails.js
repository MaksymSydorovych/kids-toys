import { productsUrl } from "../setting/api.js";
import { getShoppingCart } from "./storage/localStorage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
	id = params.get("id");
} else {
	console.log("error");
}
export const detailsUrl = `${productsUrl}/${id}`;
export function createDetails(detail) {
	document.title = `${detail.attributes.title}`;
	const detailsImage = document.querySelector(".details__img");
	detailsImage.innerHTML = "";
	detailsImage.src = detail.attributes.image_url;
	detailsImage.alt = detail.attributes.title;
	const detailsTitle = document.querySelector(".details__title");
	detailsTitle.innerHTML = detail.attributes.title;
	const detailsPrice = document.querySelector(".details__price");
	detailsPrice.innerHTML = detail.attributes.price + " NOK";
	const detailsDesc = document.querySelector(".details__description");
	detailsDesc.innerHTML = detail.attributes.description;
	const detailsBtn = document.querySelector(".details__button");
	detailsBtn.dataset.id = detail.attributes.id;
	detailsBtn.dataset.title = detail.attributes.title;
	detailsBtn.dataset.description = detail.attributes.description;
	detailsBtn.dataset.price = detail.attributes.price;
	detailsBtn.dataset.image = detail.attributes.image_url;
	detailsBtn.dataset.url = `./details.html?id=${detail.attributes.id}`;
	detailsBtn.href = `./details.html?id=${detail.id}`;
	const addToCartBtn = document.querySelectorAll(".details__button");

	addToCartBtn.forEach(button => {
		button.addEventListener("click", handleAddToCartClick);
	});

	function handleAddToCartClick() {
		const id = this.dataset.id;
		const title = this.dataset.title;
		const price = this.dataset.price;
		const image = this.dataset.image;
		const description = this.dataset.description;
		const url = this.dataset.url;

		const currentCart = getShoppingCart();

		const productExists = currentCart.find(function (cart) {
			return cart.id === id;
		});

		if (productExists === undefined) {
			const product = {
				id: id,
				title: title,
				price: price,
				image: image,
				description: description,
				url: url,
			};

			currentCart.push(product);
			saveFavs(currentCart);
		} else {
			const newCarts = currentCart.filter(cart => cart.id !== id);
			saveFavs(newCarts);
		}
	}

	function saveFavs(carts) {
		localStorage.setItem("shopping-cart", JSON.stringify(carts));
	}
}
