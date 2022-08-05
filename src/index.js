/* eslint-disable import/no-cycle */
/* eslint-disable comma-dangle */

import LibraryClass from './library';
import Book from './book';
import './styles.css';

const Library = new LibraryClass();
const startingBookCount = 0;
// Get Books from local storage
let defaultBookList = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    numPages: '200',
    haveRead: 'true',
    IDBVersionChangeEvent: `${toString(startingBookCount)}`,
  },
];
let storedBooks = localStorage.getItem('storedBookList');
storedBooks = JSON.parse(storedBooks || JSON.stringify(defaultBookList));
for (const storedBook of storedBooks) {
  const newBook = new Book(
    storedBook.title,
    storedBook.author,
    storedBook.numPages,
    storedBook.genre,
    storedBook.haveRead,
    storedBook.id
  );
  Library.addBookToLibrary(newBook);
}

// const Book1 = new Book(
//   'Harry Potter',
//   'J.K Rowling',
//   345,
//   'Fantasy',
//   true,
//   Library.bookCount
// );

// Library.addBookToLibrary(Book1);

const openFormButton = document.querySelector('.open-button');
openFormButton.addEventListener('click', openForm);

const closeFormButton = document.querySelector('.cancel');
closeFormButton.addEventListener('click', closeForm);

// Form
// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('book-container').style.display = 'none';
  document.querySelector('.header').style.display = 'none';

  const titleInput = document.getElementById('title');
  titleInput.addEventListener('input', () => {
    titleInput.setCustomValidity('');
    titleInput.checkValidity();
  });
  titleInput.addEventListener('invalid', () => {
    if (titleInput.value === '') {
      titleInput.setCustomValidity('Enter a valid title!');
    }
  });

  const authorInput = document.getElementById('author');
  authorInput.addEventListener('input', () => {
    authorInput.setCustomValidity('');
    authorInput.checkValidity();
  });
  authorInput.addEventListener('invalid', () => {
    if (authorInput.value === '') {
      authorInput.setCustomValidity('Enter a valid author!');
    }
  });

  const pagesInput = document.getElementById('pages');
  pagesInput.addEventListener('input', () => {
    pagesInput.setCustomValidity('');
    pagesInput.checkValidity();
  });
  pagesInput.addEventListener('invalid', () => {
    if (pagesInput.value === '') {
      pagesInput.setCustomValidity('Enter a valid number!');
    } else {
      pagesInput.setCustomValidity(
        'Number needs to be greater than 10. Try again!'
      );
    }
  });
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('book-container').style.display = 'grid';
  document.querySelector('.header').style.display = 'flex';
}

function processForm(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const genre = document.getElementById('genre').value;
  const hasRead = document.getElementById('hasRead').checked;
  const newBook = new Book(
    title,
    author,
    pages,
    genre,
    hasRead,
    Library.bookCount
  );

  Library.addBookToLibrary(newBook);

  closeForm();
  document.getElementById('newBook').reset();
}

const form = document.getElementById('newBook');
form.addEventListener('submit', processForm);

export default Library;
