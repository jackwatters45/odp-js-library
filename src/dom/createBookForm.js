export default () => {
  const mainContent = document.querySelector('.main-content');

  const form = document.createElement('form');
  form.classList.add('book-input');

  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('shadow');
  form.appendChild(card);

  const title = document.createElement('input');
  title.classList.add('title-input');
  title.placeholder = 'Title';
  title.required = 'true';
  title.type = 'text';
  card.appendChild(title);

  const author = document.createElement('input');
  author.classList.add('author-input');
  author.placeholder = 'Author';
  author.type = 'text';
  card.appendChild(author);

  const pages = document.createElement('input');
  pages.classList.add('pages-input');
  pages.placeholder = 'Num Pages';
  pages.type = 'number';
  card.appendChild(pages);

  const readText = document.createElement('div');
  readText.innerHTML = 'Have you read it?';
  readText.classList.add('read-text');
  const read = document.createElement('input');
  read.classList.add('read-input');
  read.type = 'checkbox';
  read.name = 'read-input';
  card.appendChild(readText);
  card.appendChild(read);

  const submit = document.createElement('input');
  submit.classList.add('add-btn');
  submit.type = 'submit';
  submit.value = 'Add Book';
  card.appendChild(submit);

  mainContent.appendChild(form);
};
