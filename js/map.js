var map;

// Create a new blank array for all the listing markers.
var markers = [];

ViewModel.prototype.initMap = function() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.5425, lng: -80.24466},
    zoom: 15,
    styles: mapStyles,
    mapTypeControl: false
  });

  /*var largeInfowindow = new google.maps.InfoWindow();*/
  var bounds = new google.maps.LatLngBounds();

  map.fitBounds(bounds);

  this.googleReady(true);
};

ViewModel.prototype.populateInfoWindow = function(marker, infowindow, smallIcon) {
  var innerHTML = '<div class="map-box">';
  innerHTML += '<div class="map-header">' + marker.title + '</div>';
  innerHTML += '<p class="map-item"><strong>Next Meeting: </strong>' + marker.prettyMeeting + '</p>';
  innerHTML += '<p class="map-item"><strong>Address: </strong>' + marker.address + '</p>';
  innerHTML += '<p class="map-item"><strong>About: </strong>' + marker.blurb + '</p>';
  innerHTML += '<p class="map-item"><strong>Here and Now Writing Prompt: </strong>' + marker.title + '</p>';
  innerHTML += '<p class="map-item"><strong>Books for Inspiration: </strong></p>';
  innerHTML += '<div class="map-book-container">';
  innerHTML += '<img class="map-book-image" src=' + marker.thumbnail + ' alt=' + marker.booktitle + '>';
  innerHTML += '<img class="map-book-image" src=' + marker.thumbnail + ' alt=' + marker.booktitle + '>';
  innerHTML += '</div>';
  innerHTML += '</div>';

  infowindow.marker = marker;
  infowindow.setContent(innerHTML);
  infowindow.open(map, marker);
  // Make sure the marker property is cleared if the infowindow is closed.
  infowindow.addListener('closeclick', function(){
    infowindow.setMarker = null;
    marker.setIcon(smallIcon);
  });
}

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21, 34));
  return markerImage;
}

function makeBigIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(42, 68),
    new google.maps.Point(0, 0),
    new google.maps.Point(21, 50),
    new google.maps.Size(42, 68));
  return markerImage;
}

