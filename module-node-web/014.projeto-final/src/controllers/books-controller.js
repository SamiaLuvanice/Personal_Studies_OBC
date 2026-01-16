const booksModel = require("../models/books-model");

module.exports = {
  // GET /api/books
  index: (req, res) => {
    const books = booksModel.getAllBooks();
    res.json(books);
  },

  // GET /api/books/:id
  show: (req, res) => {
    const { id } = req.params;
    const book = booksModel.getBookById(id);
    if (!book) return res.status(404).json({ message: "Livro não encontrado" });
    res.json(book);
  },

  // POST /api/books
  save: (req, res) => {
    const { title, author, quantityAvailable } = req.body;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof quantityAvailable !== "number"
    ) {
      return res.status(400).json({ message: "Dados inválidos" });
    }

    const newBook = booksModel.createBook(title, author, quantityAvailable);
    res.status(201).json(newBook);
  },

  // PUT /api/books/:id
  update: (req, res) => {
    const { id } = req.params;
    const { title, author, quantityAvailable } = req.body;
    const fieldsUpUpdate = {}; // objeto vazio para armazenar os campos a serem atualizados

    if (title) fieldsUpUpdate.title = title;
    if (author) fieldsUpUpdate.author = author;
    if (quantityAvailable) fieldsUpUpdate.quantityAvailable = quantityAvailable;

    const updatedBook = booksModel.updateBook(id, fieldsUpUpdate);
    res.status(200).json(updatedBook);
  },

  // DELETE /api/books/:id
  delete: (req, res) => {
    const { id } = req.params;
    const deletedBook = booksModel.deleteBook(id);
    res.status(200).json(deletedBook);
  },
};
