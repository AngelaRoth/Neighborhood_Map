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

  var backColor = '#' + getColor(data.type);
  this.color = ko.observable(backColor);

  this.listContents = ko.observable('<h3 class="list-header">' + this.title() + '</h3>');

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
    this.listContents('<h3 class="list-header">' + this.title() + '</h3>' +
                      '<div class="list-item"><span class="item-header">Next Event:</span> ' + this.nextMeeting() + '</div>' +
                      '<div class="list-item"><span class="item-header">About:</span> ' + this.blurb() + '</div>');
  };



};

ko.applyBindings(new ViewModel());
