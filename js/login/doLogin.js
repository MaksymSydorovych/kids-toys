import { url } from "../setting/api.js";
import { saveToken, saveUser } from "../components/storage/localStorage.js";
import displayMessage from "../components/displayMessage.js";

export async function doLogin(username, password) {
  const loginUrl = url + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(loginUrl, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "./edit.html";
    }

    if (json.error) {
      displayMessage(
        "message__error",
        "Invalid login details",
        ".login__message"
      );
    }
  } catch (error) {
    console.log(error);
    displayMessage(
      "message__error",
      "Invalid login details",
      ".login__message"
    );
  }
}
