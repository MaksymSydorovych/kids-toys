export default function storageAmount() {
  const cartIcon = document.querySelector(".cart__icon--amount");
  const cartAmount = document.querySelector(".cart__amount");

  if (localStorage["shopping-cart"]) {
    const totalItems = JSON.parse(localStorage["shopping-cart"]).length;
    cartIcon.innerHTML = totalItems;
    cartAmount.innerHTML = totalItems;
  }
}
