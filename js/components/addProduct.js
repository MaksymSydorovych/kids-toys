import { url, productsUrl } from "../setting/api.js";
import { token } from "../components/storage/localStorage.js";
import displayMessage from "./displayMessage.js";
import { fetchApi } from "../setting/fetchApi.js";
import { createProducts } from "./createProducts.js";
export async function addProduct(image, title, price, description, featured) {
  const addUrl = url + "products/";
  const data = JSON.stringify({
    image_url: image,
    title: title,
    price: price,
    description: description,
    featured: featured,
  });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(addUrl, options);
    const json = await response.json();
    if (json.created_at) {
      displayMessage("message", "Product Added", ".message");
      fetchApi(createProducts, productsUrl);
    }
    if (json.error) {
      displayMessage("message", json.message, ".message");
    }
  } catch (error) {
    console.log(error);
  }
}
