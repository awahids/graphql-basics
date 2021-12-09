const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {books, getBookByYear} = require('./query/BookQuery');

module.exports = {
    books,
    getBookByYear,
    createBook,
    updateBook,
    deleteBook
}