export default () => {
  const bookForm = `<form class="book-input" id="book-input" action="#" method="#">
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
}