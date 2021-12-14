const {
  createBook,
  updateBook,
  deleteBook,
} = require("./mutation/BookMutation");
const {
  books,
  getBookByYear,
  getBookByBookName,
  joinBookAndBookShelf,
  replaceIdBook,
} = require("./query/BookQuery");

const {
  createShelf,
  updateShelf,
  deleteShelfById,
} = require("./mutation/ShelfMutation");
const { shelfs, splitBookAtBookShelfs } = require("./query/BookShelfQuery");

const { signUp, signIn } = require("./mutation/authMutation");

module.exports = {
  books,
  getBookByYear,
  getBookByBookName,
  joinBookAndBookShelf,
  replaceIdBook,
  createBook,
  updateBook,
  deleteBook,

  shelfs,
  splitBookAtBookShelfs,
  createShelf,
  updateShelf,
  deleteShelfById,

  signUp,
  signIn,
};
