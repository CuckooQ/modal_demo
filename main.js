import App from "./App.js";
import Modal from "./Modal.js";

function init() {
  new App(document.getElementById("root"));
  new Modal(document.getElementById("modal-root"));
}

init();
