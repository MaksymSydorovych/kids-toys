import { clearAdmin } from "../storage/localStorage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Do you whant to logout?");

      if (doLogout) {
        clearAdmin();
        location.href = "../login.html";
      }
    };
  }
}
