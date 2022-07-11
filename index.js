
let myLibrary = [];

function Book(title, author, numPages, genre, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.haveRead = Boolean(haveRead);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function getUserInput() {
    let newBook = new Book("Big Choppa", "Parker", 200, "Comedy", true);
    console.log(newBook);
    addBookToLibrary(newBook);
}

function getUserInput2() {
    let newBook = new Book("Small Choppa", "Mike", 400, "Thriller", true);
    console.log(newBook);
    addBookToLibrary(newBook);
}

function loadBooks() {
    let books = document.getElementById("book-container");

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
            <button>Delete</button>
        </div>`;

        books.appendChild(newBookCard);
    });
}