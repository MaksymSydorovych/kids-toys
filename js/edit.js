import { url, productsUrl } from "./setting/api.js";
import { token } from "./components/storage/localStorage.js";
import deleteButton from "./components/buttons/deleteButton.js";
import { fetchApi } from "./setting/fetchApi.js";
import logoutButton from "./components/buttons/logout.js";
import { submitForm } from "./components/buttons/submit.js";
import { createEdit } from "./components/createEdit.js";
import {
  form,
  title,
  price,
  description,
  idInput,
  image,
  featured,
  labelFalse,
  labelTrue,
  loader,
} from "./components/innerHtml.js";
import storageAmount from "./components/storage/storageAmount.js";
storageAmount();
if (!token) {
  location.href = "login.html";
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!token) {
  location.href = "?id=1";
}

if (!id) {
  location.href = "?id=1";
}

const editUrl = url + "products/" + id;
fetchApi(createEdit, editUrl);
logoutButton();

(async function () {
  try {
    const response = await fetch(editUrl);
    const details = await response.json();
    image.value = details.image_url;
    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    featured.value = details.featured;
    idInput.value = details.id;

    deleteButton(details.id);
    console.log(details.featured);
    if (details.featured == true) {
      labelTrue.classList.add("click");
    } else {
      labelFalse.classList.add("click");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
  }
})();

form.addEventListener("submit", submitForm);
