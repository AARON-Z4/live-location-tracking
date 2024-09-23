
const map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

let userMarker = L.marker([0, 0]).addTo(map);

// Check if geolocation is supported
if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Update marker position
            userMarker.setLatLng([lat, lon]);
            map.setView([lat, lon]);

            // Optionally, log the coordinates
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        },
        (error) => {
            console.error('Error getting location:', error);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000,
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}
