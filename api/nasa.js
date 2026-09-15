const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export function getAPOD() {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  ).then(response => response.json());
}