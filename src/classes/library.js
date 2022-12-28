export default class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookToRemove) {
    this.books = this.books.filter((book) => book.title !== bookToRemove);
  }
}
