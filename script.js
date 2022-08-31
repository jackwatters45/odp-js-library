// I don't have brain power to add the toggle part now but do when you revisit!!!

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// Books stored in this array
// let myLibrary = [];

// CONSTRUCTOR
// function Book(title, author = "Unknown", numPages = "Unknown", read = false) {
//   this.author = author;
//   this.title = title;
//   this.numPages = numPages;
//   this.isRead = read;
// }

// Page Elements
let form = document.forms["book-input"];
let mainContent = document.querySelector(".main-content");
let newBooks = document.querySelector(".new-book-btn");
let removeButtons = document.querySelectorAll(".remove-btn");

class Book {
  constructor(title, author = "Unknown", numPages = "Unknown", read = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }

  get title() {
    return this.title;
  }
}

// list of books
class Library {
  constructor() {
    this.books = [];
  }

  get book() {
    return this.books;
  }

  set book(newBook) {
    this.books.push(newBook);
  }
}

myLibrary = new Library();

// take user’s input and store the new book objects into an array
function addBook() {
  form.addEventListener("submit", (e) => {
    console.log('click on form ain t workin')
    e.preventDefault();

    // Get form values
    let title = form.querySelector(".title-data").value;
    let author = form.querySelector(".author-data").value;
    let numPages = form.querySelector(".num-pages-data").value;
    let isRead = form.querySelector(".read-data").checked;

    // Create book object
    let book = new Book(title, author, numPages, isRead);

    // Add book to array
    myLibrary.addToLibrary(book);

    // Remove form
    form.parentNode.removeChild(form);

    console.log('click but display books aint working')
    // Display Books
    displayBooks();
  });
};

// function that loops through mylibrary and displays each book on the page.
function displayBooks() {
  mainContent.innerHTML = "";
  console.log(myLibrary)
  myLibrary.books.forEach((book) => {
    console.log(book)
    let check = "";

    if (book.isRead) {
      check = "checked";
    }

    mainContent.innerHTML += `<div class="card shadow">
      <div class="title">Title:</div>
      <div class="card-content title-data">${book.title}</div>
      <div class="author">Author:</div>
      <div class="card-content author-data">${book.author}</div>
      <div class="num-pages">Number of Pages:</div>
      <div class="card-content num-pages-data">${book.numPages}</div>
      <div class="read">Read?</div>
      <input class="card-content read-data checkbox" type="checkbox" id="read-data" name="read-data" ${check}>
      <button class="remove-btn">Remove Book</button>
    </div>`;
  });
}

// Adds a new book form and checks if there is already an active one
let bookForm = `<form class="book-input" id="book-input" action="#" method="#">
<div class="card shadow">
    <input class="card-content title-data input" type="text" placeholder="Title" required>
    <input class="card-content author-data input" type="text" placeholder="Author">
    <input class="card-content num-pages-data input" type="number" placeholder="Number of Pages">
    <div class="read">Have you read it?</div>
    <input class="card-content read-data checkbox"  type="checkbox" id="read-data" name="read-data">
    <!-- needs button to remove the book from the library -->
    <input class="add-btn" type="submit" value="Add Book">
</div>
</form>`;

// this works fine but maybe change formatting
newBooks.addEventListener("click", () => {
  if (document.querySelector(".book-input")) {
    alert("Finish adding the current book before adding another!");
  } else {
    mainContent.innerHTML += bookForm;
    addBook();
  }
});

// Remove a book from the library
removeButtons.forEach((button) => {
  button.addEventListener("click", function removeBook() {
    button.parentElement.remove();
    // TODO: remove book from library object / list
  });
});
