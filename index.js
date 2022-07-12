let myLibrary = [];
let totalBooks = 0;

function Book(title, author, numPages, genre, haveRead) {
    this.id = totalBooks;
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.haveRead = Boolean(haveRead);
}

let Book1 = new Book("Choppa", "Parker", 200, "THriller", true);
addBookToLibrary(Book1);
let Book2 = new Book("Gang", "Mike", 100, "Comedy", false);
addBookToLibrary(Book2);
let Book3 = new Book("Little Red", "Frank", 200, "THriller", true);
addBookToLibrary(Book3);
let Book4 = new Book("NBA", "Tham", 10, "Comedy", false);
addBookToLibrary(Book4);

function addBookToLibrary(newBook) {
    totalBooks++;
    myLibrary.push(newBook);
    loadBooks();
}

function deleteBook(e) {
    const bookID = e.target.id;
    const book = myLibrary.find(book => book.id == bookID);
    let bookIndex = myLibrary.indexOf(book);
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
            <div class="switch-container">
            <label class="switch">
                <input type="checkbox" id="switch">
                <span class="slider round"></span>
            </label>
            <h3 class="switch-label">${ (Book.haveRead) ? `Completed` : `Incomplete` }</h3>
            </div>
            <button class="delete-button" id=${Book.id}><span class="material-symbols-outlined">
            delete
            </span></button>
        </div>`;

        // Add event listener to delete button
        const buttonElement = newBookCard.querySelector("button");
        buttonElement.addEventListener('click', deleteBook);

        const checkbox = newBookCard.querySelector("#switch");
        if (Book.haveRead) {
            checkbox.checked = true;
        }

        const switchLabel = newBookCard.querySelector(".switch-label");
        // Add event listener to read sitch
        checkbox.addEventListener('change', e => {
            if(e.target.checked) {
                Book.haveRead = true;
                switchLabel.textContent = `Completed`;
            } else {
                Book.haveRead = false;
                switchLabel.textContent = `Incomplete`;
            }
        })

        books.appendChild(newBookCard);
    });
}

// Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("book-container").style.display = "none";
    document.querySelector(".header").style.display = "none";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("book-container").style.display = "grid";
    document.querySelector(".header").style.display = "flex";


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