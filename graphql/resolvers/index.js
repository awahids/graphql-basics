const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {books} = require('./query/BookQuery');

module.exports = {
    books,
    createBook,
    updateBook,
    deleteBook
}