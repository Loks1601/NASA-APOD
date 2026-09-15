const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function getAPOD() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`NASA API request failed: ${response.status}`);
  }

  const data = await response.json();

  if (!data.title || !data.date || !data.media_type) {
    throw new Error("NASA API returned incomplete APOD data");
  }

  return data;
}