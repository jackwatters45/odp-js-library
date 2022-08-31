// Page Elements
let newBooks = document.querySelector(".new-book-btn");
let mainContent = document.querySelector(".main-content");
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

class Book {
  constructor(title, author = "Unknown", numPages = "Unknown", read = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }

  displayBook() {
    mainContent.innerHTML = "";

    let check = "";
    if (this.read) {
      check = "checked";
    }

    mainContent.innerHTML += `<div class="card shadow">
        <div class="title">Title:</div>
        <div class="card-content title-data">${this.title}</div>
        <div class="author">Author:</div>
        <div class="card-content author-data">${this.author}</div>
        <div class="num-pages">Number of Pages:</div>
        <div class="card-content num-pages-data">${this.numPages}</div>
        <div class="read">Read?</div>
        <input class="card-content read-data checkbox" type="checkbox" id="read-data" name="read-data" ${check}>
        <button class="remove-btn" id="${this.title}">Remove Book</button>
      </div>`;
  }
}

// list of books
class Library {
  constructor() {
    this.books = [];
  }

  addToLibrary(book) {
    this.books.push(book);
  }

  removeBook(button, bookToRemoveId) {
    // removes html
    button.parentElement.remove();

    // uses id to find book in library and remove
    this.books = this.books.filter((e) => e.title !== bookToRemoveId);
  }

  // loops through mylibrary and displays each book on the page.
  displayBooks(form) {
    // Remove form (to be replaced by actual card)
    form.parentNode.removeChild(form);

    // displays all books
    myLibrary.books.forEach((book) => {
      book.displayBook();
    });
  }
}

myLibrary = new Library();

// creates book object adds to library and displays
function addBook(form) {
  // Get form values
  let title = form.querySelector(".title-data").value;
  let author = form.querySelector(".author-data").value;
  let numPages = form.querySelector(".num-pages-data").value;
  let isRead = form.querySelector(".read-data").checked;

  // Create book object
  let book = new Book(title, author, numPages, isRead);

  // Add book to array
  myLibrary.addToLibrary(book);

  // Display Books -
  myLibrary.displayBooks(form);
}

// add form to add a book to library and creates event listener to remove
newBooks.addEventListener("click", () => {
  if (document.querySelector(".book-input")) {
    alert("Finish adding the current book before adding another!");
  } else {
    mainContent.innerHTML += bookForm;

    let form = document.forms["book-input"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addBook(form);

      let removeButtons = document.querySelectorAll(".remove-btn");

      removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          myLibrary.removeBook(button, button.id);
        });
      });
    });
  }
});
