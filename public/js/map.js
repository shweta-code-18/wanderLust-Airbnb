// Initialize map
const map = L.map("map").setView([28.6139, 77.2090], 12); // Delhi

// Load OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);


const marker = L.marker([28.6139, 77.2090]).addTo(map);

marker.bindPopup("<b>Delhi</b><br>Capital of India").openPopup();

