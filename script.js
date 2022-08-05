
console.log('cock');
console.log(9 + 10);
let twentyOne = 19;
console.log(twentyOne / 10)

// useful to remember
// Arrow functions 
// textBox.addEventListener('keydown', (event) => {
// console.log(`You pressed "${event.key}".`);
// });

// create elements
// const div = document.createElement('div');

// select dom elements
// const container = document.querySelector('#container');

// insert element into page
// parentNode.appendChild(childNode) appends childNode as the last child of parentNode
// parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

// inline style
// div.style.color = 'blue';                                      

// button
const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
  // alert("Hello World");
// });

// consider named functions
btn.addEventListener('click', function (e) {
  console.log(e);
});

btn.addEventListener('click', function (e) {
  console.log(e.target);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// beeeeep
let myLibrary = [

];

function Book(author, title, numPages, read) { 
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = read;
}

function addBookToLibrary() {
  // do stuff here
}

// function that loops through the array and displays each book on the page.
function displayBooks() {}

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
function removeBook() {}

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
function changeReadStatus() {

}