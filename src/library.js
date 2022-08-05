/* eslint-disable indent */
/* eslint-disable no-param-reassign */

// eslint-disable-next-line import/no-cycle
import Library from './index';

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
    this.totalBooks += 1;
  };

  addBookToLibrary = (newBook) => {
    newBook.id = this.bookCount;
    this.incrementBookCount();
    this.myLibrary.push(newBook);
    this.loadBooks();
    this.addBookToStorage();
  };

  addBookToStorage = () => {
    let storedArray = [];
    for (const thisBook of this.myLibrary) {
      let book = {
        title: thisBook.title,
        author: thisBook.author,
        numPages: thisBook.numPages,
        genre: thisBook.genre,
        haveRead: Boolean(thisBook.haveRead),
        id: thisBook.id,
      };
      storedArray.push(book);
    }
    window.localStorage.setItem('storedBookList', JSON.stringify(storedArray));
  };

  loadBooks = () => {
    const books = document.getElementById('book-container');
    // Remove all child elements
    let firstChild = books.firstElementChild;
    while (firstChild) {
      firstChild.remove();
      firstChild = books.firstElementChild;
    }

    this.myLibrary.forEach((Book) => {
      const newBookCard = document.createElement('div');
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
                    <h3 class="switch-label">${
                      Book.haveRead ? 'Completed' : 'Incomplete'
                    }</h3>
                    </div>
                    <button class="delete-button" id=${
                      Book.id
                    }><span class="material-symbols-outlined">
                    delete
                    </span></button>
                </div>`;

      // Add event listener to delete button
      const buttonElement = newBookCard.querySelector('button');
      buttonElement.addEventListener('click', (e) => {
        let bookID = e.path[1].id;
        bookID = parseInt(bookID);
        const book = Library.myLibrary.find((book_) => book_.id === bookID);
        const bookIndex = Library.myLibrary.indexOf(book);
        Library.myLibrary.splice(bookIndex, 1);
        Library.addBookToStorage();
        Library.loadBooks();
      });

      const checkbox = newBookCard.querySelector('#switch');
      if (Book.haveRead) {
        checkbox.checked = true;
      }

      const switchLabel = newBookCard.querySelector('.switch-label');
      // Add event listener to read sitch
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          Book.haveRead = true;
          switchLabel.textContent = 'Completed';
        } else {
          Book.haveRead = false;
          switchLabel.textContent = 'Incomplete';
        }
        Library.addBookToStorage();
      });

      books.appendChild(newBookCard);
    });
  };
}

export default LibraryClass;
