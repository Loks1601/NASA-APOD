import { getAPOD } from "../api/nasa.js";
import { renderAPOD } from "../components/apod.js";

const app = document.querySelector("#app");

app.innerHTML = "<p>Loading...</p>";

getAPOD()
  .then(data => {
    app.innerHTML = renderAPOD(data);
  })
  .catch(err => {
    app.innerHTML = `<p>Error: ${err.message}</p>`;
  });