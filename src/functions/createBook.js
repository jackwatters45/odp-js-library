import Book from '../classes/book';

export default () => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const numPages = document.querySelector('.pages').value;
  const isRead = document.querySelector('.read').checked;

  return new Book(title, author, numPages, isRead);
};
