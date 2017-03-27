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

  this.makeMarkers = ko.computed(function() {
    if (self.googleReady()) {
      var largeInfowindow = new google.maps.InfoWindow();
      var bounds = new google.maps.LatLngBounds();

      self.locationList().forEach(function(item) {
        var iconColor = getColor(item.type());
        var icon = makeMarkerIcon(iconColor);
        item.marker = new  google.maps.Marker({
          map: map,
          position: item.location(),
          title: item.title(),
          icon: icon
        });

        item.marker.setAnimation(null);

        item.marker.addListener('click', function() {
          populateInfoWindow(this, largeInfowindow);
          self.locationList().forEach(function(item) {
            item.marker.setAnimation(null);
          });
          if (this.getAnimation() === null) {
            this.setAnimation(google.maps.Animation.BOUNCE);
          } else {
            this.setAnimation(null);
          }
        });

        bounds.extend(item.marker.position);
      });

      map.fitBounds(bounds);
    }

  }, this);

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


var viewModel = new ViewModel();

ko.applyBindings(viewModel);


