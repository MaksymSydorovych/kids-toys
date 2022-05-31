import storageAmount from "./components/storage/storageAmount.js";
import { createShoppingCart } from "./components/createCart.js";

createShoppingCart();
storageAmount();

const clearLocalStorageContainer = document.querySelector(
  ".clear-local-storage"
);

const clearLocalStorage = () => {
  const windowConfirm = window.confirm("Do you whant to emptyed shoping cart?");

  if (windowConfirm) {
    localStorage.clear("shopping-cart");
    setTimeout(location.reload(), 1000);
  }
};
clearLocalStorageContainer.addEventListener("click", clearLocalStorage);
