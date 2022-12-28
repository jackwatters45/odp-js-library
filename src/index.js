import './style.css';
import Library from './classes/library';
import displayBook from './dom/displayBook';
import createBook from './functions/createBook';

const newBookBtn = document.querySelector('.new-book-btn');
const form = document.querySelector('.book-input');
const library = new Library();

newBookBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.reset();
    form.classList.remove('hidden');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = createBook();
  library.addBook(newBook);
  displayBook(newBook);
  form.classList.add('hidden');

  const removeButton = document.querySelector(`#${newBook.title}>button`);
  removeButton.addEventListener('click', () => {
    library.removeBook(newBook.title);
    removeButton.parentElement.remove();
  });

  const readBox = document.querySelector(`#${newBook.title}>input`);
  readBox.addEventListener('click', () => newBook.toggleRead());
});

// TODO fix the positioning of new cards
