const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {createShelf} = require('./mutation/ShelfMutation');
const { books, getBookByYear } = require('./query/BookQuery');
const {shelfs} = require('./query/BookShelfQuery');

module.exports = {
    books,
    getBookByYear,
    createBook,
    updateBook,
    deleteBook,

    shelfs,
    createShelf
}