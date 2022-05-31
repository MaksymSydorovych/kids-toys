export function getShoppingCart() {
  const shoppingCart = localStorage.getItem("shopping-cart");

  if (shoppingCart === null) {
    return [];
  } else {
    return JSON.parse(shoppingCart);
  }
}

const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export const token = getToken();

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function clearAdmin() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
