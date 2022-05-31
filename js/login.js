import { submitLogin } from "./login/submitLogin.js";
const formLogin = document.querySelector(".login__form");
formLogin.addEventListener("submit", submitLogin);
import storageAmount from "./components/storage/storageAmount.js";
storageAmount();
