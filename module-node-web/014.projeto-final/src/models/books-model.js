const HttpError = require("../errors/HttpError");
const uuid = require("uuid").v4;

let books = [
  { id: "1", title: "1984", author: "George Orwell", quantityAvailable: 10 },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quantityAvailable: 5,
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    quantityAvailable: 7,
  },
];

module.exports = {
  getAllBooks: () => books.map(book => ({ id: book.id, title: book.title })),

  getBookById: (id) => books.find((book) => book.id === id),

  createBook: (title, author, quantityAvailable) => {
    const newBook = {
      id: uuid(),
      title,
      author,
      quantityAvailable,
    };
    books.push(newBook);
    return newBook;
  },

  updateBook: (id, updatedBook) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");
    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return books[bookIndex];
  },

  deleteBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");
    const deletedBook = books[bookIndex];
    books = books.filter((book) => book.id !== id);
    return deletedBook;
  },

  takeBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");
    books[bookIndex].quantityAvailable -= 1;
  },

  returnBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new HttpError(404, "Livro não encontrado");
    books[bookIndex].quantityAvailable += 1;
  },
};
