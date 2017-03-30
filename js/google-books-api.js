google.books.load();

var viewer;

function initialize() {
  viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
}

google.books.setOnLoadCallback(initialize);   // TODO : Change callback!


function loadData() {

  var $topThree = $('#top-three');
  var $gbIsbn = $('#gb-isbn');
  var $gbDescription = $('#gb-description');
  var $gbImage = $('#gb-image');

  // clear out old data before new request
  $topThree.text('');
  $gbIsbn.text('');
  $gbDescription.text('');
  $gbImage.attr('src', '')

  var title = $('#title').val();
  var author = $('#author').val();
  var dataEntered = true;

  var identifierArray = [];
  identifierArray.length = 0;
  console.log('loading data, array = ' + identifierArray);

  console.log('title = ' + title);

  var googleBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  // TODO Make replacement of "bad" characters more robust.
  if (title) {
    var titleForURL = title.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    googleBooksURL += 'intitle:' + titleForURL;
    if (author) {
      var authorForURL = author.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
      googleBooksURL += '+inauthor:' + authorForURL;
    }
  } else if (author) {
    var authorForURL = author.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    googleBooksURL += 'inauthor:' + authorForURL;
  } else {
    googleBooksURL += 'Pride%20and%20Prejudice';
  }

  googleBooksURL += '&key=AIzaSyCNgnR6srI-o-L_1msz-0AA03afwiyOrxA';

  console.log('googleBooksURL = ' + googleBooksURL);

  $.getJSON( googleBooksURL )
    // ERROR-HANDLING: Make sure request succeeded using
    // .done() and .fail() on the object returned by .get()
    .done(function(data) {
      // Log data to see how it's structured.
      // REMEMBER to expand by clicking on arrows!
      console.log(data);

      // Create a variable which ALREADY focusses on
      // the part of the data you're interested in.
      // (here, it is the array of returned items)
      var items = data.items;
      var numItems = items.length;
/*
      var identifierArray = [];

      // Make SURE Array is emptied of any previous data
      identifierArray.length = 0;
*/
      /*var isbnIdentifier = "";*/
      var thumbnailSource = "";
      var bookDescription = "";
      /*var itemWithIdentifier = null;*/
      /*var identifierType = "";*/
      var identifierFound = false;
      var itemWithThumbnail = null;
      var itemWithDescription = null;
      var itemWithEverything = null;

      for (var i = 0; i < numItems; i++) {
        if (items[i].volumeInfo.hasOwnProperty('industryIdentifiers')) {
          var industryIdents = items[i].volumeInfo.industryIdentifiers;
          industryIdents.forEach(function(e) {
            if ((e.type = 'ISBN_13') || (e.type = 'ISBN_10')) {
              identifierFound = true;
              identifierArray.push('ISBN:' + e.identifier);
            }
          });

/*
          industryIdents.forEach(function(e) {
            if (e.type = 'ISBN_13') {
              isbnIdentifier = e.identifier;
              itemWithIdentifier = i;
              identifierType = 'ISBN_13';
              identifierFound = true;
            } else if (e.type = 'ISBN_10') {
              isbnIdentifier = e.identifier;
              itemWithIdentifier = i;
              identifierType = 'ISBN_10';
              identifierFound = true;
            }
          });
*/

        }
        if (items[i].volumeInfo.hasOwnProperty('imageLinks')) {
          if (items[i].volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
            thumbnailSource = items[i].volumeInfo.imageLinks.thumbnail;
            itemWithThumbnail = i;
          }
        }
        if(items[i].volumeInfo.hasOwnProperty('description')) {
          bookDescription = items[i].volumeInfo.description;
          itemWithDescription = i;
        }
        if (identifierFound && itemWithThumbnail && itemWithDescription) {
          itemWithEverything = i;
          break;
        }
      }
/*
      if (identifierFound) {
        $gbIsbn.text('type = ' + identifierType + '; identifier = ' + isbnIdentifier);
      } else {
        $gbIsbn.text('No Identifier Found');
      }
*/
      if(itemWithThumbnail) {
        $gbImage.attr('src', thumbnailSource);
      }

      if(itemWithDescription) {
        $gbDescription.text(bookDescription);
      } else {
        $gbDescription.text('No Description Found');
      }

      // Load Book into Embedded Viewer
/*
      console.log('identifierArray = ' + identifierArray)
      viewer.load(identifierArray, alertNotFound);

      function alertNotFound() {
        alert("No Book View Available");
      }
*/

      if (identifierFound) {
        console.log('identifierArray = ' + identifierArray)
        viewer.load(identifierArray);
      }

/*
      if (identifierFound) {
        var loadString = '';
        identifierArray.forEach(function(e) {
          loadString += 'ISBN:' + e;
        });
        viewer.load('ISBN:' + isbnIdentifier);
      }
*/




    })
    .fail(function() {
      console.log('google books data Unavailable');
      /*$nytArticle.text("NYT Articles Currently Unavailable");*/
    });





  return false;
};

$('#form-container').submit(loadData);
