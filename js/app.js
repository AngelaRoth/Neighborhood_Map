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

  var backColor = '#' + getColor(data.type);
  this.color = ko.observable(backColor);

  this.listContents = ko.observable('<h4>' + this.title() + '</h4>');

};



var ViewModel = function() {

  var self = this;

  self.locationList = ko.observableArray([]);

  locations.forEach(function(locItem) {

    var newLocItem = new ObservableLocation(locItem);
    console.log('KOtitle = ' + newLocItem.title);

    self.locationList.push(newLocItem);
  });

  this.expandListContents = function() {
    this.listContents('<h4>' + this.title() + '</h4>' +
                      '<p><b>Next Meeting:</b> ' + this.when() + '</p>' +
                      '<p><b>About:</b> ' + this.blurb() + '</p>');
  };



};

ko.applyBindings(new ViewModel());
