var locations = [
  {
    title: 'The Bookshelf Indie Bookstore',
    blurb: 'An independant Bookstore with adjacent Restaurant and Cinema upstairs. Research authentic Romance every Wednesday night, as local couples come out for Date Night ($20 Wine).',
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
    title: 'Bookshelf eBar Poetry Slam',
    blurb: 'Guelph Spoken Word poetry slam, featuring some of the best slam poets in the country. Third Saturday of the Month.',
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
    title: 'Bookshelf Writing Room',
    blurb: 'Join other writers to work in a quiet space with free wifi and coffee by donation. Every Monday.',
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
    title: 'Carden St Book Club',
    blurb: 'Come chat about books with a focus on social change and community building. First Wednesday of the Month.',
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
    title: 'Chapters',
    blurb: 'Yes, that Chapters. Tired from a full Saturday at the Mall? Burrow into the pillows and duvets at closing time and wait for Sunday morning. Pick up some scented candles while you are there.',
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
    title: 'The Common',
    blurb: 'Come to the Writing Womb every Monday evening. Bring any type of work or reading. No purchase necessary; suggested donation $5.',
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
    title: 'Goldie Mill Ruin',
    blurb: 'Get inspired by this picturesque ruin on the river. Doggapalooza Tuesdays offer a higher-octane inspirational burst.',
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
  },
  {
    title: 'Harcourt Workshops',
    blurb: 'Harcourt United Church hosts Workshops by Special Guest Instructors every Saturday.',
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
    title: 'Janus Books',
    blurb: 'Second Hand Bookshop with some Rare Finds. Pop in before lunch on a Wednesday for some Refined Reading.',
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
    title: 'Public Library',
    blurb: 'Chairs have been tucked in interesting locations. Find your new writing-cave every Sunday at Noon.',
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
    title: 'Public Library Courses',
    blurb: 'Random Courses are held in the room at the top of the stairs. Online Courses begin the Third Wednesday of the Month.',
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
    title: 'Publication Studio',
    blurb: 'Publication Studio prints and binds books by hand, creating original work with artists and writers. Drop by on Saturdays for a book or a visit.',
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
    title: 'Red Brick Cafe Open Mic Night',
    blurb: 'A relaxed and fun chance to share you work.  Bring something to read or just hear some of Guelph’s interesting literary voices. First Tuesday of the Month.',
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
    title: 'Seniors Writing Club',
    blurb: 'Share your stories, essays and poems in the Boardroom of the Evergreen Seniors Center. Come out to read, or listen and enjoy! First Tuesday of the Month.',
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
    title: 'Short Stories at Symposium Cafe',
    blurb: 'Chat about the writing experience and join in on short-story challenges while enjoying drinks and nibblies. Second Saturday of the Month.',
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
    title: 'Sunrise Books',
    blurb: 'Secondhand Bookshop filled to the gills. Searching is rewarded, especially on Treasure Hunt Thursdays.',
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
    title: 'U of G Creative Writing Courses',
    blurb: 'A rotating choice of creative writing evening courses taught by University of Guelph MFA grads. Pretend they start on the Third Thursday.',
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
    title: 'U of G Free Workshops',
    blurb: 'Two days of Free Writers Workshops. Pretend they start on the Fourth Friday.',
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
    title: 'Vocamus Coffee at Planet Bean',
    blurb: 'Come have a coffee and chat with other local authors about what you are reading and writing. Last Sunday of the Month.',
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
    title: 'Vocamus Second Saturday',
    blurb: 'Come have a beer and chat with other authors about what you are reading and writing. Second Saturday of the Month.',
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
  }
];

function addNextMeetingTime() {
  var numLocations = locations.length;
  for (var i = 0; i < numLocations; i++) {
    locations[i].nextMeeting = nextDay(locations[i].day, locations[i].weeks, locations[i].hour, locations[i].minute);
    locations[i].prettyMeeting = makeDatePretty(locations[i].nextMeeting);
    var checkDay = new Date();
    var waitTime = locations[i].nextMeeting - checkDay;
  }
}

function addToEachLocation() {
  locations.forEach(function(location) {
    location.suggestedBooks = [];
  });
}

addNextMeetingTime();
addToEachLocation();

// Populate suggested books for first location, to test app
var bookOne = {
  title: "Vernon God Little",
  image: "http://books.google.com/books/content?id=w6RlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  description: "In the town jail of Martirio – the barbecue sauce capital of Central Texas – sits fifteen-year-old Vernon Little, dressed only in New Jack trainers and underpants. He is in trouble. His friend Jesus has just blown away sixteen of his classmates before turning the gun on himself. And Vernon, as his only buddy, has become the focus of the town’s need for vengeance. The news of the tragedy has resulted in the quirky backwater being flooded with wannabe CNN hacks all-too-keen to claim their fifteen minutes and lay the blame for the killings at Vernon’s feet. In particular Eulalio Ledesma, who begins manipulating matters so that Vernon becomes the centre for the bizarre and vengeful impulses of the townspeople of Martirio. But Vernon is sure he’ll be ok. “Why do movies end happy? Because they imitate life. You know it, I know it.” Peopled by a cast of grotesques, freaks, coldblooded chattering housewives (who are all mysteriously, recently widowed), and one very special adolescent with an unfortunate talent for being in the wrong place at the right time, Vernon God Little is riotously funny and puts lust for vengeance, materialism, and trial by media squarely in the dock. It also heralds the arrival of one of the most exciting and acclaimed voices in contemporary fiction, who with this debut novel illustrates that in modern times innocence and basic humanity may not be enough.",
  preview: "http://books.google.ca/books?id=8b0MqqWqYSoC&printsec=frontcover&dq=intitle:vernon+god+little&hl=&cd=2&source=gbs_api",
  votes: 3
}

var bookTwo = {
  title: "The New Valley",
  image: "http://books.google.com/books/content?id=yBpPWmEaoEMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  description: "The three linked novellas that comprise the Fulbright-winning author's debut bring the reader into America's remote and unforgiving backcountry and open up the private worlds of three very different men. A first novel. Reprint. A New York Times Editors' Choice.",
  preview: "http://books.google.ca/books?id=yBpPWmEaoEMC&printsec=frontcover&dq=intitle:the+new+valley+inauthor:josh+weil&hl=&cd=1&source=gbs_api",
  votes: 2
}

var bookThree = {
  title: "Why We Live Where We Live",
  image: "http://books.google.com/books/content?id=nmVZnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  description: "Discusses the many factors that affect where humans choose to live, including the availability of food and water, jobs, and the need for safety.",
  preview: "http://books.google.ca/books?id=nmVZnwEACAAJ&dq=inauthor:kira+vermond&hl=&cd=2&source=gbs_api",
  votes: 1,
}
var bookFour = {
  title: "The Grand Sophy",
  image: "http://books.google.com/books/content?id=XtQsv--oP90C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  description: "'Georgette Heyer is unbeatable.' Sunday Telegraph. A beautifully repackaged edition of one of the best of the best. When the redoubtable Sir Horace Stanton-Lacy is ordered to South America on Diplomatic Business he parks his only daughter Sophy with his sister's family, the Ombersleys, in Berkeley Square. Upon her arrival, Sophy is bemused to see her cousins are in a sad tangle. The heartless and tyrannical Charles is betrothed to a pedantic bluestocking almost as tiresome as himself; Cecilia is besotted with a beautiful but quite feather-brained poet; and Hubert has fallen foul of a money-lender. It looks like the Grand Sophy has arrived just in time to sort them out, but she hasn't reckoned with Charles, the Ombersleys' heir, who has only one thought - to marry her off and rid the family of her meddlesome ways.",
  preview: "http://books.google.ca/books?id=XtQsv--oP90C&printsec=frontcover&dq=intitle:the+grand+sophy&hl=&cd=1&source=gbs_api",
  votes: 1
}


locations[0].suggestedBooks.push(bookOne);
locations[0].suggestedBooks.push(bookTwo);
locations[0].suggestedBooks.push(bookThree);
locations[0].suggestedBooks.push(bookFour);


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
    var d = new Date();
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
  var now = new Date();
  var nowMonth = now.getMonth();
  var goodNext;
  weeks.forEach(function(week) {
    // If fifth week, check last date in array (week=5 means of that
    // weekday in the month; sometimes week 4; somtimes week 5)
    if (week === 5) {
      var proposedNext = new Date(daysArray[daysArray.length - 1]);
    } else {
      var proposedNext = new Date(daysArray[week - 1]);
    }
    // if the weekday in that week is later than the current date,
    // mark that day as the next meeting day
    if (now < proposedNext && !goodNext) {
      goodNext = proposedNext;
    }
  });
  // If no good meeting day was found in current month, mark first
  // possible date in next month as the next meeting day
  if (!goodNext) {
    daysArray = getDays(dayOfWeek, 1, startHour, startMinute);
    // NOTE that we are using the day in the daysArray which corresponds
    // to the first possible week according to the weeks array;
    // AND we are subtracting one from the first number in the weeks array
    // because weeks begin at 1, not 0.
    goodNext = new Date(daysArray[weeks[0] - 1]);
  }

  return goodNext;
}

function makeDatePretty(d) {
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var day = d.getDay();
  var month = d.getMonth();
  var date = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  var twoDigitMinutes = getTwoDigitMinutes(minutes);

  var prettyString = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ' at ' + hours + ':' + twoDigitMinutes;
  return prettyString;
}

function getTwoDigitMinutes(minute) {
  switch (minute) {
    case 0:
      return '00';
      break;
    case 1:
      return '01';
      break;
    case 2:
      return '02';
      break;
    case 3:
      return '03';
      break;
    case 4:
      return '04';
      break;
    case 5:
      return '05';
      break;
    case 6:
      return '06';
      break;
    case 7:
      return '07';
      break;
    case 8:
      return '08';
      break;
    case 9:
      return '09';
      break;
    default:
      return minute;
  }
}

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

