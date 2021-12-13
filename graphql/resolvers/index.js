const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {createShelf} = require('./mutation/ShelfMutation');
const { books, getBookByYear, getBookByBookName, joinBookAndBookShelf } = require('./query/BookQuery');
const {shelfs, addBookIdByAddFields, splitBookAtBookShelfs} = require('./query/BookShelfQuery');

module.exports = {
    books,
    getBookByYear,
    getBookByBookName,
    joinBookAndBookShelf,
    createBook,
    updateBook,
    deleteBook,

    shelfs,
    splitBookAtBookShelfs,
    createShelf,
    addBookIdByAddFields
}