import { productsUrl } from "./setting/api.js";
import { fetchApi } from "./setting/fetchApi.js";
import { searchProducts } from "./components/searchPropducts.js";
import { createProducts } from "./components/createProducts.js";
import storageAmount from "./components/storage/storageAmount.js";
storageAmount();
fetchApi(createProducts, productsUrl);
fetchApi(searchProducts, productsUrl);
