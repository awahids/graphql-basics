const { createBook, updateBook, deleteBook } = require('./mutation/BookMutation');
const {createShelf, addBookIdByAddFields} = require('./mutation/ShelfMutation');
const { books, getBookByYear } = require('./query/BookQuery');
const {shelfs, splitBookAtBookShelfs} = require('./query/BookShelfQuery');

module.exports = {
    books,
    getBookByYear,
    createBook,
    updateBook,
    deleteBook,

    shelfs,
    splitBookAtBookShelfs,
    createShelf,
    addBookIdByAddFields
}