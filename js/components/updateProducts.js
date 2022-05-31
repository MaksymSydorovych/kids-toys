import { url, productsUrl } from "../setting/api.js";
import { token } from "../components/storage/localStorage.js";
import displayMessage from "../components/displayMessage.js";
import { fetchApi } from "../setting/fetchApi.js";
import { productList } from "./productList.js";

export async function updateProduct(
  image,
  title,
  price,
  description,
  featured,
  id
) {
  const urlUpdate = url + "products/" + id;

  const data = JSON.stringify({
    image_url: image,
    title: title,
    price: price,
    description: description,
    featured: featured,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(urlUpdate, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("message", "Product updated", ".message");
      fetchApi(productList, productsUrl);
    }

    if (json.error) {
      displayMessage("message message__error", json.message, ".message");
    }
  } catch (error) {
    console.log(error);
  }
}
