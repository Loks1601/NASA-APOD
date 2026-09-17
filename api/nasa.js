const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function getAPOD(date) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  if (date) {
    url += `&date=${date}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`NASA API request failed: ${response.status}`);
  }

  const data = await response.json();

  if (!data.title || !data.date || !data.media_type) {
    throw new Error("NASA API returned incomplete APOD data");
  }

  return data;
}