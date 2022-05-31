import { productsUrl } from "../setting/api.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  console.log("error");
}
export const editUrl = `${productsUrl}/${id}`;
export function createEdit(detail) {
  const editImage = document.querySelector(".edit__img");
  editImage.innerHTML = "";
  editImage.src = detail.image_url;
  editImage.alt = detail.title;
  const editTitle = document.querySelector(".edit__title");
  editTitle.innerHTML = detail.title;
  const editPrice = document.querySelector(".edit__price");
  editPrice.innerHTML = detail.price + " NOK";
  const editDesc = document.querySelector(".edit__description");
  editDesc.innerHTML = detail.description;
}
