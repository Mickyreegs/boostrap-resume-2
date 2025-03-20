function initMap() {
  // Create a map centered on Ireland with zoom level 3
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10, // Zoom out for a wider view
    center: { lat: 51.897928, lng: -8.47061 }, // Coordinates for Cork City (central in the county)
  });

  // List of marker locations
  var locations = [
    { lat: 51.808276, lng: -8.371436 },
    { lat: 51.876616, lng: -8.439747 },
    { lat: 51.901476, lng: -8.469129 },
  ];

  // Add each marker to the map
  locations.forEach(function (location) {
    new google.maps.Marker({
      position: location,
      map: map,
    });
  });
}
