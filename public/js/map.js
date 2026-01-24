document.addEventListener("DOMContentLoaded", async function () {
  const mapDiv = document.getElementById("map");

  // 💡 Stop if there is no map on the page
  if (!mapDiv) return;

  const location = mapDiv.dataset.location;
  const title = mapDiv.dataset.title;
  const price = mapDiv.dataset.price;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
  );
  const coordinates = await response.json();

  if (!coordinates.length) {
    console.error("No coordinates found for", location);
    return;
  }

  const lat = coordinates[0].lat;
  const lng = coordinates[0].lon;

  const map = L.map("map").setView([lat, lng], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<h6>${title}</h6><p>${location}</p>`)
    .openPopup();
});
// const priceColor = price > 3000 ? "red" : "green";

// L.circleMarker([lat, lng], {
//   radius: 9,
//   fillColor: priceColor,
//   color: priceColor,
//   fillOpacity: 0.8,
// })
//   .addTo(map)
//   .bindPopup(title);
// });
