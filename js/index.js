import { bannerUrl } from "./setting/api.js";
import { productsUrl } from "./setting/api.js";
import { createBanner } from "./components/heroBanner.js";
import { fetchApi } from "./setting/fetchApi.js";
import { createFeaturedProducts } from "./components/featuredProducts.js";
import storageAmount from "./components/storage/storageAmount.js";
storageAmount();
fetchApi(createBanner, bannerUrl);
fetchApi(createFeaturedProducts, productsUrl);
