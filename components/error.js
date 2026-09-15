export function renderError(message) {
  console.error(message);

  return `
    <div class="error">
      <h2>Something went wrong</h2>
      <p>We couldn't load today's Astronomy Picture.</p>
    </div>
  `;
}