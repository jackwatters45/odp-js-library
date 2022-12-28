export default class Book {
  constructor(title, author = 'Unknown', pages = 'Unknown', read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setPages(pages) {
    this.pages = pages;
  }

  toggleRead() {
    this.read = !this.read;
  }
}
