import { updateProduct } from "../updateProducts.js";
import { addProduct } from "../addProduct.js";
import { message, featuredTrue, idInput } from "../innerHtml.js";
import { validateForm } from "./formValidation.js";
import displayMessage from "../displayMessage.js";
export function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const imageValue = image.value;
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  let featuredValue;
  if (featuredTrue.checked) {
    featuredValue = true;
  } else {
    featuredValue = false;
  }
  const idValue = idInput.value;
  function reloadThePage() {
    window.location.reload();
  }
  if (validateForm() === false) {
    return displayMessage(
      "message message__error",
      "Please enter proper values",
      ".message"
    );
  }

  if (document.URL.includes("add")) {
    addProduct(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue
    );
    reloadThePage();
  }
  if (document.URL.includes("edit")) {
    updateProduct(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue,
      idValue
    );
    reloadThePage();
  }
}
