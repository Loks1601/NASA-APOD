import { getAPOD } from "../api/nasa.js";
import { renderAPOD } from "../components/apod.js";
import { renderLoading } from "../components/loading.js";
import { renderError } from "../components/error.js";

const app = document.querySelector("#app");

async function loadAPOD(date) {
  app.innerHTML = renderLoading();

  try {
    const data = await getAPOD(date);

    app.innerHTML = renderAPOD(data);

    const dateInput = document.querySelector("#apod-date");
    const previousButton = document.querySelector("#prev-day");
    const nextButton = document.querySelector("#next-day");

    dateInput.addEventListener("change", () => {
      loadAPOD(dateInput.value);
    });

    previousButton.addEventListener("click", () => {
      const currentDate = new Date(dateInput.value);
      currentDate.setDate(currentDate.getDate() - 1);

      const previousDate = currentDate.toISOString().split("T")[0];

      loadAPOD(previousDate);
    });

    nextButton.addEventListener("click", () => {
      const currentDate = new Date(dateInput.value);
      currentDate.setDate(currentDate.getDate() + 1);

      const nextDate = currentDate.toISOString().split("T")[0];

      loadAPOD(nextDate);
    });

  } catch (err) {
    app.innerHTML = renderError(err.message);
  }
}

loadAPOD();