export function renderAPOD(data) {
  let media;

  const today = new Date().toISOString().split("T")[0];
  const isToday = data.date === today;

  if (data.media_type === "image") {
    media = `<img src="${data.url}" />`;
  } else if (data.url.includes("youtube")) {
    media = `<iframe src="${data.url}" allowfullscreen></iframe>`;
  } else {
    media = `<video src="${data.url}" controls></video>`;
  }

  return `
    <section class="apod">

      <div class="apod-header">
        <p class="eyebrow">ASTRONOMY PICTURE OF THE DAY</p>

        <h1>${data.title}</h1>

        <p class="date">${data.date}</p>
      </div>

      <div class="date-explorer">

        <label for="apod-date">
          Explore another day
        </label>

        <input
          type="date"
          id="apod-date"
          min="1995-06-16"
          max="${today}"
          value="${data.date}"
        />

        <div class="date-buttons">

          <button id="prev-day">
            ← Previous Day
          </button>

          <button id="next-day" ${isToday ? "disabled" : ""}>
            Next Day →
          </button>

        </div>

      </div>

      ${media}

      <div class="apod-info">
        <h2>About this image</h2>

        <p>${data.explanation}</p>
      </div>

    </section>
  `;
}