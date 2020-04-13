// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
  let arrCopy = bookList.slice();
  arrCopy.push(bookName);
  return arrCopy;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
  let arrCopy = bookList.slice();
  var book_index = arrCopy.indexOf(bookName);
  if (book_index >= 0) {

    arrCopy.splice(book_index, 1);
    return arrCopy;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("Original BookList =", bookList);
console.log("==========");
console.log("newBookList =", newBookList);
console.log("==========");
console.log("newestBookList =", newBookList);

