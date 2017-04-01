this.listItemClicked = function() {
  if (this !== self.currentLocation()) {
    self.currentLocation(this);
    populateInfoWindow(this, largeInfowindow);
    self.locationist().forEach(function(item) {
      item.marker.setIcon(item.defaultIcon);
    });
    self.listItemMouseOver.call(this);
  }
}

