function loadData() {
  var title = $('#title').val();
  var author = $('#author').val();
  var dataEntered = false;


  // TODO Make replacement of "bad" characters more robust.
  if (title) {
    var titleForURL = title.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    if (author) {
      var authorForURL = author.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    }
  } else if (author) {
    var authorForURL = author.replace(' ', '%20');
    nytQuery = authorForURL;
    wikiQuery = authorForURL;
  } else {
    dataEntered = false;
  }

  var googleBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  if (title) {
    dataEntered = true;
    var titleForURL = title.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    googleBooksURL += 'intitle:' + titleForURL;
    if (author) {
      var authorForURL = author.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
      googleBooksURL += '+inauthor:' + authorForURL;
    }
  } else if (author) {
    dataEntered = true;
    var authorForURL = author.replace('<', ' ').replace('>', ' ').replace(' ', '%20');
    googleBooksURL += 'inauthor:' + authorForURL;
  }

  if (!dataEntered) {
    googleBooksURL +='Guelph%20Ontario'
  }

  googleBooksURL += '&key=AIzaSyCNgnR6srI-o-L_1msz-0AA03afwiyOrxA';

  console.log('googleBooksURL = ' + googleBooksURL);

  var bookFound = false;

  $.getJSON( googleBooksURL )
    .done(function(data) {
      // log data to see how it's structured.
      console.log(data);

      if (data.hasOwnProperty('items')) {
        bookFound = true;
        /*var items = data.items;*/
        var firstBook = data.items[0];
        console.log(firstBook);
      }

      if (bookFound) {
        // Check if properties exist and assign their values to global variables
        if (firstBook.volumeInfo.hasOwnProperty('title')) {
          bookTitle = firstBook.volumeInfo.title;
        }
        if (firstBook.volumeInfo.hasOwnProperty('authors')) {
          var authors = firstBook.volumeInfo.authors;
          var numAuthors = authors.length;
          for (var i = 0; i < (numAuthors - 1); i++) {
            bookAuthor += authors[i];
            bookAuthor += ', ';
          }
          bookAuthor += authors[numAuthors - 1];
        }
        if (firstBook.volumeInfo.hasOwnProperty('imageLinks')) {
          if (firstBook.volumeInfo.imageLinks.hasOwnProperty('smallThumbnail')) {
            bookImageSrc = firstBook.volumeInfo.smallThumbnail;
          } else if (firstBook.volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
            bookImageSrc = firstBook.volumeInfo.thumbnail;
          }
        }
        console.log('bookTitle = ' + bookTitle);
        console.log('bookAuthor = ' + bookAuthor);
        console.log('bookImageSrc = ' + bookImageSrc);
      }
    })
    .fail(function() {
      console.log('Google Books data Unavailable');
    });

 /* return false;*/
};

$('#form-container').submit(loadData);
