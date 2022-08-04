let myLibrary = [

];

function Book(author, title, numPages, read) { 
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = read;
}

function addBookToLibrary() {
  // do stuff here
}

// function that loops through the array and displays each book on the page.
function displayBooks() {}

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
function removeBook() {}

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
function changeReadStatus() {

}