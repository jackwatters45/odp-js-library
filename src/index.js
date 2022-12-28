import './style.css';
import Library from './classes/library';
import Book from './classes/book';

// Page Elements
const newBook = document.querySelector('.new-book-btn');
const mainContent = document.querySelector('.main-content');

// list of books

const myLibrary = new Library();

// creates book object adds to library and displays
function addBook(form) {
  // Get form values
  const title = form.querySelector('.title-data').value;
  const author = form.querySelector('.author-data').value;
  const numPages = form.querySelector('.num-pages-data').value;
  const isRead = form.querySelector('.read-data').checked;

  // Create book object
  const book = new Book(title, author, numPages, isRead);

  // Add book to array
  myLibrary.addToLibrary(book);

  // Display Books -
  myLibrary.displayBooks(form);
}

// add form to add a book to library and creates event listener to remove
newBook.addEventListener('click', () => {
  if (!document.querySelector('.book-input')) {
    mainContent.innerHTML += 'bookForm';

    const form = document.forms['book-input'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addBook(form);

      const removeButtons = document.querySelectorAll('.remove-btn');

      removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          myLibrary.removeBook(button, button.id);
        });
      });
    });
  }
});