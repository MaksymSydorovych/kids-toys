import { url } from "../../setting/api.js";
import { token } from "../storage/localStorage.js";

export default function deleteButton(id) {
  const container = document.querySelector(".delete");
  container.innerHTML = `<button type="button"value="Reload Page" onClick="window.location.reload(true)" class="edit__delete">Delete</button>`;
  const button = document.querySelector(".edit__delete");
  button.onclick = async function () {
    const doDelete = confirm("Do you whant to delete this product?");
    if (doDelete) {
      const deleteUrl = url + "products/" + id;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(deleteUrl, options);
        const json = await response.json();
        location.href = "./edit.html";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
