let myLibrary = [];


function Book(title, author, numPages, genre, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.haveRead = Boolean(haveRead);
}

let Book1 = new Book("Choppa", "Parker", 200, "THriller", true);
let Book2 = new Book("Gang", "Mike", 100, "Comedy", false);
let Book3 = new Book("Little Red", "Frank", 200, "THriller", true);
let Book4 = new Book("NBA", "Tham", 10, "Comedy", false);
myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);
myLibrary.push(Book4);
loadBooks();


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    loadBooks();
}

function deleteBook(book) {
    console.log(book);
    // console.log(book);
    // console.log(`Deleting this book: ${book}`);
    let bookIndex = myLibrary.indexOf(book);
    console.log(bookIndex);
    myLibrary.splice(bookIndex, 1);
    loadBooks();
}

function loadBooks() {
    let books = document.getElementById("book-container");
    // console.log(books);
    // Remove all child elements 
    var firstChild = books.firstElementChild;
    while(firstChild) {
        firstChild.remove();
        firstChild = books.firstElementChild;
    }

    // console.log(books);
    myLibrary.forEach(function(Book){
        let newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');

        newBookCard.innerHTML = `<h2>${Book.title}</h2>
        <div class="book-info">
            <h3>Author: ${Book.author}</h3>
            <h3>Pages: ${Book.numPages}</h3>
            <h3>Genre: ${Book.genre}</h3>
        </div>
        <div class="book-buttons">
            <div><input type="checkbox" id="switch" /><label for="switch">Toggle</label></div>
            <button onclick="deleteBook()">Delete</button>
        </div>`;

        books.appendChild(newBookCard);
    });
}

// Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

let form = document.getElementById('newBook');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let genre = document.getElementById('genre').value
    let hasRead = document.getElementById('hasRead').value

    let newBook = new Book(title, author, pages, genre, hasRead);
    console.log(newBook);
    addBookToLibrary(newBook);
    closeForm();
});