import { productsUrl } from "./setting/api.js";
import { token } from "./components/storage/localStorage.js";
import { fetchApi } from "./setting/fetchApi.js";
import { productList } from "./components/productList.js";
import logoutButton from "./components/buttons/logout.js";
import { form } from "./components/innerHtml.js";
import { submitForm } from "./components/buttons/submit.js";
import storageAmount from "./components/storage/storageAmount.js";
storageAmount();

if (!token) {
  location.href = "./login.html";
}

fetchApi(productList, productsUrl);
logoutButton();

form.addEventListener("submit", submitForm);
