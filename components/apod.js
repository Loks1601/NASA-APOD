export function renderAPOD(data) {
  let media;

  if (data.media_type === "image") {
    media = `<img src="${data.url}" />`;
  } else if (data.url.includes("youtube")) {
    media = `<iframe src="${data.url}" allowfullscreen></iframe>`;
  } else {
    media = `<video src="${data.url}" controls></video>`;
  }

  return `
    <h1>${data.title}</h1>
    <p class="date">${data.date}</p>
    ${media}
    <p>${data.explanation}</p>
  `;
}

