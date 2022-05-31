import { detailsUrl } from "./components/createDetails.js";
import { createDetails } from "./components/createDetails.js";
import { fetchApi } from "./setting/fetchApi.js";
import storageAmount from "./components/storage/storageAmount.js";

fetchApi(createDetails, detailsUrl);
storageAmount();
