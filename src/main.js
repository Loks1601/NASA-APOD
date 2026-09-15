import { getAPOD } from "../api/nasa.js";
import { renderAPOD } from "../components/apod.js";
import { renderLoading } from "../components/loading.js";
import { renderError } from "../components/error.js";

const app = document.querySelector("#app");

app.innerHTML = renderLoading();

getAPOD()
  .then(data => {
    app.innerHTML = renderAPOD(data);
  })
  .catch(err => {
    app.innerHTML = renderError(err.message);
  });