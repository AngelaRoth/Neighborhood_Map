var ObservableLocation = function(data) {
  this.title = ko.observable(data.title);
  this.blurb = ko.observable(data.blurb);
  this.when = ko.observable(data.when);
  this.day = ko.observable(data.day);
  this.weeks = ko.observable(data.weeks);
  this.hour = ko.observable(data.hour);
  this.minute = ko.observable(data.minute);
  this.link = ko.observable(data.link);
  this.location = ko.observable(data.location);
  this.placeId = ko.observable(data.placeId);
  this.type = ko.observable(data.type);
  this.nextMeeting = ko.observable(data.nextMeeting);
  this.prettyMeeting = ko.observable(data.prettyMeeting);
  this.listExpanded = ko.observable(false);
  this.listHidden = ko.observable(false);
  this.googleReady = ko.observable(false);

  var backColor = '#' + getColor(data.type);
  this.color = ko.observable(backColor);

  this.listContents = ko.observable('<h3 class="list-header">' + this.title() + '</h3>');

  this.currentTime = ko.computed(function() {
    var d = new Date();
    return d;
  }, this);

  this.timeToNext = ko.observable(this.nextMeeting() - this.currentTime());

};

var ViewModel = function() {
  this.googleReady = ko.observable(false);

  var self = this;
  self.locationList = ko.observableArray([]);

  locations.forEach(function(locItem) {
    var newLocItem = new ObservableLocation(locItem);
    self.locationList.push(newLocItem);
  });
/*
  for (var i = 0; i < self.locationList().length; i++) {
    self.locationList()[i].marker = ko.observable(markers[i]);
  }
*/
  this.listContentsClicked = function() {
    var indexNumber = self.locationList.indexOf(this);

    if (!this.listExpanded()){
      this.listExpanded(true);
      this.listContents('<h3 class="list-header">' + this.title() + '</h3>' +
                        '<div class="list-item"><span class="item-header">Next Event:</span> ' + this.prettyMeeting() + '</div>' +
                        '<div class="list-item"><span class="item-header">About:</span> ' + this.blurb() + '</div>');

      // Make the marker associated with this list item bounce
/*
      this.marker().setAnimation(google.maps.Animation.BOUNCE);
*/
      markers[indexNumber].setAnimation(google.maps.Animation.BOUNCE);

    } else {
      this.listExpanded(false);
      this.listContents('<h3 class="list-header">' + this.title() + '</h3>');

      // Stop marker from bouncing
      markers[indexNumber].setAnimation(null);
    }
  };

  this.filter = function(type) {
    var bounds = new google.maps.LatLngBounds();
    var indexNumber = 0;
    self.locationList().forEach(function(item) {
      if (item.type() === type || type === 'all') {
        item.listHidden(false);
        markers[indexNumber].setMap(map);
        bounds.extend(markers[indexNumber].position);
      } else {
        item.listHidden(true);
        markers[indexNumber].setMap(null);
      }
      indexNumber++;
    });
    map.fitBounds(bounds);
  };

  this.checkIfInTime = function(timePeriod) {
    var bounds = new google.maps.LatLngBounds();
    var indexNumber = 0;
    var cutOffTime;

    switch (timePeriod) {
      case 'day':
        cutOffTime = 86400000;   // milliseconds in 24 hours
        break;
      case 'week':
        cutOffTime = 86400000 * 7;
        break;
      default:
        cutOffTime = 0;
    }

    self.locationList().forEach(function(item) {
      if (item.timeToNext() <= cutOffTime) {
        item.listHidden(false);
        markers[indexNumber].setMap(map);
        bounds.extend(markers[indexNumber].position);
      } else {
        item.listHidden(true);
        markers[indexNumber].setMap(null);
      }
      indexNumber++;
    });
    map.fitBounds(bounds);
  }

};

ViewModel.prototype.initMap = function() {
  // style courtesy of snazzy maps "Crisp and Vivid" by "Nathan"
  // https://snazzymaps.com/style/2053/crisp-and-vivid
  var styles = [
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e5dc"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#44a04b"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7bb718"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a3a2a2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0099dd"
            }
        ]
    }
  ];

  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.5425, lng: -80.24466},
    zoom: 15,
    styles: styles,
    mapTypeControl: false
  });

  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();


  // Style the markers a bit. This will be our listing marker icon.
  var defaultIcon = makeMarkerIcon('0091ff');

  // Create a "highlighted location" marker color for when the user
  // mouses over the marker.
  var highlightedIcon = makeMarkerIcon('FFFF24');

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    var iconColor = getColor(locations[i].type)
    var icon = makeMarkerIcon(iconColor);
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      icon: icon,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);

    // Set marker animation to null in preparation for making it bounce, later
    marker.setAnimation(null);

    // Create an onclick event to open the large infowindow at each marker and make markers bounce.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
      markers.forEach(function(e) {
        e.setAnimation(null);
      });
      if (this.getAnimation() === null) {
        this.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        this.setAnimation(null);
      }
    });

    bounds.extend(markers[i].position);
  }

  map.fitBounds(bounds);

  // Make ViewModel aware that Google Maps is ready to go, in order to do stuff like create map markers.
  this.googleReady(true);
};

var viewModel = new ViewModel();

ko.applyBindings(viewModel);

var map;

// Create a new blank array for all the listing markers.
var markers = [];

viewModel.initMap();



function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
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

