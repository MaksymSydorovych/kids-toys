import {
  image,
  imageError,
  title,
  titleError,
  price,
  priceError,
  description,
  descriptionError,
} from "../innerHtml.js";

export function validateForm() {
  let imageIsError;
  let titleIsError;
  let priceIsError;
  let descriptionIsError;

  const imageUrl = image.value;

  if (validateUrl(imageUrl) === true) {
    imageError.style.display = "none";
    imageIsError = false;
  } else {
    imageError.style.display = "block";
    imageIsError = true;
  }

  const titleValue = title.value;

  if (validateLength(titleValue, 3) === true) {
    titleError.style.display = "none";
    titleIsError = false;
  } else {
    titleError.style.display = "block";
    titleIsError = true;
  }

  const priceValue = price.value;

  if (validateLength(priceValue, 1) === true) {
    priceError.style.display = "none";
    priceIsError = false;
    if (isNaN(priceValue)) {
      priceError.style.display = "block";
      priceIsError = true;
    }
  } else {
    priceError.style.display = "block";
    priceIsError = true;
  }

  const descriptionValue = description.value;

  if (validateLength(descriptionValue, 10) === true) {
    descriptionError.style.display = "none";
    descriptionIsError = false;
  } else {
    descriptionError.style.display = "block";
    descriptionIsError = true;
  }
  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }

  if (
    imageIsError === true ||
    titleIsError === true ||
    priceIsError === true ||
    descriptionIsError === true
  ) {
    return false;
  } else {
    return true;
  }
}

function validateLength(value, lenghtToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lenghtToCheck) {
    return true;
  } else {
    return false;
  }
}
