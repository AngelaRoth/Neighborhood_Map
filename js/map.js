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

function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    var innerHTML = '<div class="map-box">';
    innerHTML += '<div class="map-header">' + marker.title + '</div>';
    innerHTML += '<p class="map-label">Next Meeting:</p>';
    innerHTML += '<p class="map-text">' + marker.prettyMeeting + '</p>';
    innerHTML += '<p class="map-label">About:</p>';
    innerHTML += '<p>' + marker.blurb + '</p>';
    innerHTML += '<p><strong>Here and Now Writing Prompt:</strong></p>';
    innerHTML += '<p>' + marker.title + '</p>';
    innerHTML += '<p><strong>Books for Inspiration:</strong></p>';
    innerHTML += '<div class="map-book-container">';
    innerHTML += '<img src=' + marker.thumbnail + ' alt=' + marker.booktitle + '>';
    innerHTML += '<img src=' + marker.thumbnail + ' alt=' + marker.booktitle + '>';

    innerHTML += '</div>';
    innerHTML += '</div>';



    infowindow.setContent(innerHTML);
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });
  }
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
    new google.maps.Size(21,34));
  return markerImage;
}

