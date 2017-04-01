/*
<input type="button" class="location-button" data-bind="style: { backgroundColor: color }, click: $parent.listContentsClicked, event: { mouseover: $parent.listItemMouseOver, mouseout: $parent.listItemMouseOut }, css: { nextTwentyFour: timeToNext() < 86400000}"></input>
*/

this.listItemMouseOver = function() {
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(this.marker.position);

    // Thanks to StackOverflow for this nifty trick of extending bounds when you only have one point (which makes the map zoom too close!)
    // http://stackoverflow.com/questions/3334729/google-maps-v3-fitbounds-zoom-too-close-for-single-marker
    var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.005, bounds.getNorthEast().lng() + 0.005);
    var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.005, bounds.getNorthEast().lng() - 0.005);
    bounds.extend(extendPoint1);
    bounds.extend(extendPoint2);

    map.fitBounds(bounds);
    this.marker.setIcon(this.bigIcon);
  }

  this.listItemMouseOut = function() {
    this.marker.setIcon(this.defaultIcon);
    map.fitBounds(self.allBounds);
  }


  this.listItemMouseOver = function() {
    this.marker.setIcon(this.bigIcon);
  }

  this.listItemMouseOut = function() {
    if (this !== self.currentLocation()) {
      this.marker.setIcon(this.defaultIcon);
    }
  }

