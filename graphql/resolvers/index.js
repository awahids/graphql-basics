const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {createShelf} = require('./mutation/ShelfMutation');
const { books, getBookByYear, getBookByBookName, joinBookAndBookShelf, replaceIdBook } = require('./query/BookQuery');
const {shelfs, splitBookAtBookShelfs} = require('./query/BookShelfQuery');

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
}