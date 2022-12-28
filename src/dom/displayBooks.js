export default () => {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '';

   // loops through mylibrary and displays each book on the page.
   displayBooks(form) {
    // Remove form (to be replaced by actual card)
    form.parentNode.removeChild(form);

    // displays all books
    myLibrary.books.forEach((book) => {
      book.displayBook();
    });
  }

  let check = '';
  if (this.read) {
    check = 'checked';
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
};
