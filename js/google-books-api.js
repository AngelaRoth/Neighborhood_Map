function loadData() {
  console.log('loading data');

  var $topThree = $('#top-three');
  var $gbIsbn = $('#gb-isbn');
  var $gbDescription = $('#gb-description');
  var $gbImage = $('#gb-image');
  var $gbEpub = $('#gb-epub');
/*
  // clear out old data before new request
  $topThree.text("");
  $gbIsbn.text("");
  $gbDescription.text("");
  $gbImage.src("");
  $gbEpub.text("");
*/
  var title = $('#title').val();
  var author = $('#author').val();
  var dataEntered = true;

  console.log('title = ' + title);

  var googleBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=War%20and%20Peace';
/*
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
    dataEntered = false;
  }
*/
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
      var isbnThirteen = "";
      var isbnTen = "";
      var thumbnailSource = "";
      var bookDescription = "";
      var itemWithIsbnThirteen = null;
      var itemWithIsbnTen = null;
      var identifierFound = false;
      var itemWithThumbnail = null;
      var itemWithDescription = null;
      var itemWithEverything = null;

      for (var i = 0; i < numItems; i++) {
        if (items[i].volumeInfo.hasOwnProperty('industryIdentifiers')) {
          var industryIdents = items[i].volumeInfo.industryIdentifiers;
          industryIdents.forEach(function(e) {
            if (e.type = 'ISBN_13') {
              isbnThirteen = e.identifier;
              itemWithIsbnThirteen = i;
              var identifierType = 'ISBN_13';
              identifierFound = true;
            } else if (e.type = 'ISBN_10') {
              isbnTen = e.identifier;
              itemWithIsbnTen = i;
              var identifierType = 'ISBN_10';
              identifierFound = true;
            }
          });
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



      if (firstItem.volumeInfo.industryIdentifiers) {
        bookIdentifiers = firstItem.volumeInfo.industryIdentifiers;
        $gbIsbn.text(bookIdentifiers)
      }

      if (firstItem.volumeInfo.imageLinks.thumbnail) {
        bookImage = firstItem.volumeInfo.imageLinks.thumbnail;
        $gbImage.attr('src', bookImage);
      }

      if (firstItem.volumeInfo.description) {
        bookDescription = firstItem.volumeInfo.description;
        $gbDescription.text(bookDescription);
      }


/*
      var articles = data.response.docs;

      var headline = articles[0].headline.main;
      var snippet = articles[0].snippet;
      var artURL = articles[0].web_url;
      var headString = '<a href="' + artURL + '">' + headline + '</a>';
      var snippetString = '<p>' + snippet + '</p>';
      var fullString = headString + snippetString;
      $nytArticle.append(fullString);
*/
    })
    .fail(function() {
      console.log('google books data Unavailable');
      /*$nytArticle.text("NYT Articles Currently Unavailable");*/
    });





  return false;
};

$('#form-container').submit(loadData);
