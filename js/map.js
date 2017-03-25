var map;

// Create a new blank array for all the listing markers.
var markers = [];

function initMap() {

  var d = new Date();
  d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
  console.log(d);

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log('today ' + today);
  console.log('date ' + date);
  console.log('time ' + time);

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

  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.


  var locations = [
    {
      title: 'The Bookshelf - Writing Room',
      blurb: 'Join other writers to work in a quiet space with free wifi and coffee by donation.',
      when: 'Every Monday, 9:00am - noon',
      day: 1,
      weeks: [1,2,3,4,5],
      hour: 9,
      minute: 0,
      link: '',
      location: {lat: 43.5454125, lng: -80.2504411},
      placeId: 'ChIJpY64w8GaK4gR_6eh8uYlhwI',
      type: 'write'
    },
    {
      title: 'Vocamus Press Second Saturday',
      blurb: 'Come have a beer and chat with other authors about what you are reading and writing.',
      when: 'Second Saturday of the Month, 7:00pm - 10:00pm',
      day: 6,
      weeks: [2],
      hour: 19,
      minute: 0,
      link: '',
      address: '49 Norfolk St',
      location: {lat: 43.543907, lng: -80.25036089999999},
      placeId: 'ChIJH6BSCsGaK4gREFDY6UuhSGA',
      type: 'social'
    },
    {
      title: 'Poetry Slam at the eBar',
      blurb: 'Guelph Spoken Word monthly poetry slam, featuring some of the best slam poets in the country.',
      when: 'Third Saturday of the Month, 7:00pm - 10:00pm',
      day: 6,
      weeks: [3],
      hour: 19,
      minute: 0,
      link: '',
      address: '41 Quebec St',
      location: {lat: 43.54552479999999, lng: -80.2505975},
      placeId: 'ChIJpY64w8GaK4gR_6eh8uYlhwI',
      type: 'share'
    },
    {
      title: 'The Bookshelf - Bookstore',
      blurb: 'Independant Bookstore with adjacent Restaurant and Cinema upstairs!',
      when: 'Wednesday is Date Night - $20 wine and Fodder for Romance Novelists',
      day: 3,
      weeks: [1,2,3,4,5],
      hour: 17,
      minute: 30,
      link: '',
      address: '41 Quebec St',
      location: {lat: 43.5455706, lng: -80.2504962},
      placeId: 'ChIJPTq_w8GaK4gRVtwb1fJ_mVk',
      type: 'book'
    },
    {
      title: 'Vocamus Press Coffee at Planet Bean',
      blurb: 'Come have a coffee and chat with other local authors about what you are reading and writing.',
      when: 'Last Sunday of the Month, 1:00pm - 3:00pm',
      day: 0,
      weeks: [5],
      hour: 13,
      minute: 0,
      link: '',
      address: '41 Quebec St',
      location: {lat: 43.544369, lng: -80.2479427},
      placeId: 'ChIJzwtnJMKaK4gRaoGKA5twKsc',
      type: 'social'
    },
    {
      title: 'Red Brick Cafe Open Mic Night',
      blurb: 'A relaxed and fun chance to share you work.  Bring something to read or just hear some of Guelph’s interesting literary voices.',
      when: 'First Tuesday of the Month, 7:00pm - 9:00pm',
      day: 2,
      weeks: [1],
      hour: 19,
      minute: 0,
      link: '',
      address: '8 Douglas St',
      location: {lat: 43.54660499999999, lng: -80.248998},
      placeId: 'ChIJESiJAeqaK4gR1p5vaNuW084',
      type: 'share'
    },
    {
      title: 'Creative Writing Courses',
      blurb: 'A rotating choice of creative writing evening courses taught by University of Guelph MFA grads.',
      when: 'Winter, summer and Fall, but let us pretend they start on the Third Thursday.',
      day: 4,
      weeks: [3],
      hour: 18,
      minute: 30,
      link: '',
      address: 'University of Guelph - Johnston Hall',
      location: {lat: 43.5329877, lng: -80.228565},
      placeId: 'ChIJR1zC5CibK4gRhzmsgYA2rJQ',
      type: 'learn'
    },
    {
      title: 'Winter Workshops',
      blurb: 'Two days of Free Writers Workshops.',
      when: 'February, but let us pretend they start on the Fourth Friday.',
      day: 5,
      weeks: [4],
      hour: 9,
      minute: 45,
      link: '',
      address: 'University of Guelph - McLaughlin Library',
      location: {lat: 43.531479, lng: -80.227775},
      placeId: ' ChIJ2w63PimbK4gRvec1beOsgDo',
      type: 'learn'
    },
    {
      title: 'Public Library - Main Branch',
      blurb: 'Chairs have been tucked in interesting locations - find your cave!',
      when: 'Cave Hunt Plus every Sunday at Noon',
      day: 0,
      weeks: [1,2,3,4,5],
      hour: 12,
      minute: 0,
      link: '',
      address: '100 Norfolk St',
      location: {lat: 43.545656, lng: -80.252675},
      placeId: 'ChIJhwlUOcCaK4gRFhOIV64pZ_k',
      type: 'book'
    },
    {
      title: 'Courses at the Library',
      blurb: 'Courses are held in the room at the top of the stairs',
      when: 'Online Courses begin the Third Wednesday of the Month',
      day: 3,
      weeks: [3],
      hour: 6,
      minute: 0,
      link: '',
      address: '100 Norfolk St',
      location: {lat: 43.545891, lng: -80.252677},
      placeId: 'ChIJhwlUOcCaK4gRFhOIV64pZ_k',
      type: 'learn'
    },
    {
      title: 'Janus Books',
      blurb: 'Second Hand Bookshop with some Rare Finds',
      when: 'Refined Readings Wednesdays at 11:12',
      day: 3,
      weeks: [1,2,3,4,5],
      hour: 11,
      minute: 12,
      link: '',
      address: '10 Paisley St',
      location: {lat: 43.544752, lng: -80.253084},
      placeId: '"ChIJD-rDQsCaK4gRqAzSOvvLyHg',
      type: 'book'
    },
    {
      title: 'Chapters',
      blurb: 'Yes, that Chapters. Pick up some home scented candles while you are there',
      when: 'End of Mall-Day Pillow Snooze Saturdays',
      day: 6,
      weeks: [1,2,3,4,5],
      hour: 21,
      minute: 30,
      link: '',
      address: 'Stone Road Mall',
      location: {lat: 43.5181972, lng: -80.2379581},
      placeId: '"ChIJVeMk0iiFK4gRXuLSI4DD13g',
      type: 'book'
    },

    {
      title: 'Sunrise Books',
      blurb: 'Secondhand Bookshop filled to the gills. Searching is rewarded.',
      when: 'Treasure Thursdays at 4:57pm',
      day: 4,
      weeks: [1,2,3,4,5],
      hour: 16,
      minute: 57,
      link: '',
      address: '366 Speedvale E',
      location: {lat: 43.56791539999999, lng: -80.25794859999999},
      placeId: 'ChIJX0RdN2CaK4gRpdduPmh6XH4',
      type: 'book'
    },

    {
      title: 'Publication Studio',
      blurb: 'Publication Studio prints and binds books by hand, creating original work with artists and writers. Drop by during shop hours for a book or a visit.',
      when: 'Saturdays, 11:00am - 2:00pm',
      day: 6,
      weeks: [1,2,3,4,5],
      hour: 11,
      minute: 0,
      link: 'https://www.facebook.com/PSGuelph/',
      address: '6 Dublin St S',
      location: {lat: 43.54126369999999, lng: -80.25045589999999},
      placeId: 'ChIJy2ZxycaaK4gRKaBh9oL-Neg',
      type: 'book'
    },
    {
      title: 'The Common',
      blurb: 'The Writing Womb. Bring any type of work or reading. No purchase necessary; suggested donation $5.',
      when: 'Mondays, 7:00pm - 10:00pm',
      day: 1,
      weeks: [1,2,3,4,5],
      hour: 19,
      minute: 0,
      link: '',
      address: '36 Wilson St',
      location: {lat: 43.543712, lng: -80.24977299999999},
      placeId: 'ChIJKUrddsGaK4gRxf1ywkRMlus',
      type: 'write'
    },
    {
      title: '10 Carden St Book Club',
      blurb: 'Focusses on books about social change and community building.',
      when: 'Usually First Wednesday of the Month, 7:00pm - 9:00pm',
      day: 3,
      weeks: [1],
      hour: 19,
      minute: 0,
      link: '',
      address: '10 Carden St',
      location: {lat: 43.5438436, lng: -80.2493446},
      placeId: 'ChIJP8KNeMGaK4gRzLSBqzSNMcQ',
      type: 'social'
    },
    {
      title: 'Seniors Writing Club',
      blurb: 'We take turns reading our stories, essays and poems in the Boardroom of the Evergreen Seniors Center. Come out to read, or listen and enjoy!',
      when: 'Second and Fourth Thursday of the Month, 1:00pm - 3:30pm',
      day: 4,
      weeks: [2,4],
      hour: 13,
      minute: 0,
      link: 'https://www.meetup.com/Guelph-short-story-group/',
      address: '683 Woolwich St',
      location: {lat: 43.5602536, lng: -80.27034089999999},
      placeId: 'ChIJ9dUkj4OaK4gRQmDTuDw7qpg',
      type: 'share'
    },
    {
      title: 'Guelph Short Story Group at the Symposium Cafe',
      blurb: 'Monthly book club focusses on books about social change and community building.',
      when: 'Second Saturday of the Month, 3:00pm',
      day: 6,
      weeks: [2],
      hour: 15,
      minute: 0,
      link: 'https://www.meetup.com/Guelph-short-story-group/',
      address: '304 Stone Rd W',
      location: {lat: 43.51777619999999, lng: -80.2346285},
      placeId: 'ChIJt6tvqimFK4gRbvvU_svjx64',
      type: 'social'
    },
    {
      title: 'Harcourt United Church',
      blurb: 'Hosts Workshops by Special Guest Instructors',
      when: 'Saturdays at Ten',
      day: 6,
      weeks: [1,2,3,4,5],
      hour: 10,
      minute: 0,
      link: '',
      address: '87 Dean Ave',
      location: {lat: 43.5297778, lng: -80.2439373},
      placeId: 'ChIJTevvj82aK4gRRwPyG2GYO1E',
      type: 'learn'
    },
    {
      title: 'Goldie Mill Ruin',
      blurb: 'A picturesque ruin on the river - Get Inspired!',
      when: 'Doggapalooza Tuesdays at 6:00pm',
      day: 2,
      weeks: [1,2,3,4,5],
      hour: 18,
      minute: 0,
      link: '',
      address: '75 Cardigan St',
      location: {lat: 43.550737, lng: -80.253634},
      placeId: 'ChIJP3yBReuaK4gRIgYyPfY5Xmk',
      type: 'write'
    }
  ];

  var testDate = 'Dec 30, 2016';

  // Returns an array of the 4 or 5 days in a certain month which
  // fall on a certain weekday.
  // Used to determine the next meeting date/time of an event.
  // The time is hard-coded here using setHours() because setting it
  // once the days array (including current time) has been returned
  // gave unpredictable results (for novice me!)
  //
  // dayOfWeek = weekday we want (0 = Sun; 1 = Mon; etc.)
  // nextMonth = 0 if we want days for the current month
  //           = 1 if we want days for next month
  // startHour = starting hour of event (0 - 23)
  // startMinute = starting minute of event (0 - 59)
  function getDays(dayOfWeek, nextMonth, startHour, startMinute) {
      var d = new Date(testDate);
      var month = d.getMonth() + nextMonth;
      var year = d.getFullYear();
      var daysArray = [];

      // If the month is "past December," (i.e because current month is December
      // and we are interested in a later month), make the month the appropriate
      // month in the following year
      // NOTE: ONLY WORKS FOR ONE YEAR INTO THE FUTURE!
      //       (But for now, app only needs info for one month into future)
      if (month > 11) {
        month = month - 12;
        year += 1;
      }

      d.setFullYear(year, month, 1);
      d.setHours(startHour, startMinute, 0, 0);

      // Get the first corresponding dayOfWeek in the month
      while (d.getDay() !== dayOfWeek) {
          d.setDate(d.getDate() + 1);
      }

      // Get all the other corresponding weekdays in the month
      while (d.getMonth() === month) {
          daysArray.push(new Date(d.getTime()));
          d.setDate(d.getDate() + 7);
      }

      console.log('daysArray ' + daysArray)
      return daysArray;
  }

  // Returns the Date and Time of the next occurance of an event.
  // weeks = an array of the weeks of a month when event occurs
  //         (i.e. [1,3] means first and third week of month).
  //         NOTE that the "week" values in this array are later corrected
  //         to reflect that the 1st week is in the 0th array position.
  //
  // The following parameters are passed into the getDays() function:
  // dayOfWeek = weekday we want (0 = Sun; 1 = Mon; etc.)
  // startHour = starting hour of event (0 - 23)
  // startMinute = starting minute of event (0 - 59)
  function nextDay(dayOfWeek, weeks, startHour, startMinute) {
    var daysArray = getDays(dayOfWeek, 0, startHour, startMinute);
    var now = new Date(testDate);
    var nowMonth = now.getMonth();
    var goodNext;
    weeks.forEach(function(week) {
      console.log('week = ' + week);
      if (week === 5) {
        var numThisMonth = daysArray.length
        var proposedNext = new Date(daysArray[daysArray.length]);
      } else {
        var proposedNext = new Date(daysArray[week - 1]);
      }
      if (now < proposedNext && !goodNext) {
        console.log('now = ' + now);
        console.log ('proposed next = ' + proposedNext);
        goodNext = proposedNext;
      }
    });
    if (!goodNext) {
      daysArray = getDays(dayOfWeek, 1, startHour, startMinute);
      goodNext = new Date(daysArray[0]);
      console.log('now = ' + now);
      console.log ('good next = ' + goodNext);
    }
    console.log('returned value = ' + goodNext);
    return goodNext;
  }

  nextDay(2, [1,3], 9, 30);

  // Returns the color corresponding to the type of event.
  function getColor(type) {
    switch (type) {
      case 'write':
        return '7BB718';
        break;
      case 'share':
        return 'F7A607';
        break;
      case 'learn':
        return '2292DC';
        break;
      case 'social':
        return 'D62828';
        break;
      case 'book':
        return '8E56A8';
        break;
      default:
        return 'black';
    }
  }

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

    // Create an onclick event to open the large infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });

    bounds.extend(markers[i].position);
  }

  map.fitBounds(bounds);
}

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

