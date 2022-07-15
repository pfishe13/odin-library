class LibraryClass {
    totalBooks = 0;
    myLibrary = [];

    constructor() {
        this.myLibrary = [];
        this.totalBooks = 0;
    }

    get bookCount() {
        return this.totalBooks;
    }

    incrementBookCount = () => {
        this.totalBooks++;
    }

    addBookToLibrary = (newBook) => {
        this.incrementBookCount();
        this.myLibrary.push(newBook);
        this.loadBooks();
    }

    loadBooks = () => {
            let books = document.getElementById("book-container");
            // Remove all child elements 
            var firstChild = books.firstElementChild;
            while(firstChild) {
                firstChild.remove();
                firstChild = books.firstElementChild;
            }
        
            this.myLibrary.forEach(function(Book){
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
                // buttonElement.addEventListener('click', deleteBook);
                buttonElement.addEventListener('click', (e) => {
                    const bookID = e.path[1].id;

                    // console.log(this.myLibrary);
                    const book = Library.myLibrary.find(book => book.id == bookID);
                    let bookIndex = Library.myLibrary.indexOf(book);
                    Library.myLibrary.splice(bookIndex, 1);
                    Library.loadBooks();
                } )
        
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
}

class Book {
    constructor(title, author, numPages, genre, haveRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.genre = genre;
        this.haveRead = (Boolean(haveRead));
        this.id = Library.totalBooks;
    }
}

const Library = new LibraryClass();
let Book1 = new Book("Harry Potter", "J.K Rowling", 345, "Fantasy", true, Library.bookCount);
Library.addBookToLibrary(Book1);



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
    let hasRead = document.getElementById('hasRead').checked;
    let newBook = new Book(title, author, pages, genre, hasRead, Library.bookCount);

    Library.addBookToLibrary(newBook);

    closeForm();
    form.reset();
});