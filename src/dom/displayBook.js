/* eslint-disable import/prefer-default-export */
export default (book) => {
  const form = document.querySelector('.book-input');

  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('shadow');
  card.id = book.title;

  const titleText = document.createElement('div');
  titleText.innerHTML = 'Title:';
  const title = document.createElement('div');
  title.classList.add('book-data');
  title.innerHTML = book.title;
  card.appendChild(titleText);
  card.appendChild(title);

  const authorText = document.createElement('div');
  authorText.innerHTML = 'Author:';
  const author = document.createElement('div');
  author.classList.add('book-data');
  author.innerHTML = book.author;
  card.appendChild(authorText);
  card.appendChild(author);

  const pagesText = document.createElement('div');
  pagesText.innerHTML = 'Pages:';
  const pages = document.createElement('div');
  pages.classList.add('book-data');
  pages.innerHTML = book.pages;
  card.appendChild(pagesText);
  card.appendChild(pages);

  const readText = document.createElement('div');
  readText.innerHTML = 'Read:';
  const read = document.createElement('input');
  read.classList.add('book-data');
  read.type = 'checkbox';
  read.checked = book.read;
  card.appendChild(readText);
  card.appendChild(read);

  const removeButton = document.createElement('button');
  removeButton.id = book.title;
  removeButton.classList.add('remove-btn');
  removeButton.innerHTML = 'Remove Book';
  card.appendChild(removeButton);

  form.parentNode.insertBefore(card, form);
};
