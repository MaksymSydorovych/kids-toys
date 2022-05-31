import { doLogin } from "./doLogin.js";
import displayMessage from "../components/displayMessage.js";
export function submitLogin(event) {
  event.preventDefault();
  const loginMessage = document.querySelector(".login__message");

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage(
      "message message__error",
      "Please insert  password and  username",
      ".login__message"
    );
  }

  doLogin(usernameValue, passwordValue);
}
