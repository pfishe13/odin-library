// eslint-disable-next-line import/no-cycle
import library from './library';

class Book {
  constructor(title, author, numPages, genre, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.haveRead = Boolean(haveRead);
    this.id = library.totalBooks;
  }
}

export default Book;
