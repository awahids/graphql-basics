const { makeExecutableSchema } = require('graphql-tools');

const wrapper = require('./resolvers');

const schemaBook = require('./typeDefs/BookTypeDefs');

const books                     = wrapper.books;
const getBookByYear             = wrapper.getBookByYear;
const getBookByBookName         = wrapper.getBookByBookName;

const shelfs                    = wrapper.shelfs;
const splitBookAtBookShelfs     = wrapper.splitBookAtBookShelfs;
const joinBookAndBookShelf      = wrapper.joinBookAndBookShelf;

const createShelf               = wrapper.createShelf;
const replaceIdBook             = wrapper.replaceIdBook;

const createBook                = wrapper.createBook;
const updateBook                = wrapper.updateBook;
const deleteBook                = wrapper.deleteBook;

const schema = makeExecutableSchema({
    typeDefs: [  
        schemaBook
    ],

    resolvers: {
        Query: {
            books,
            getBookByYear,
            getBookByBookName,
            replaceIdBook,
            shelfs,
            splitBookAtBookShelfs,
            joinBookAndBookShelf
        },

        Mutation: {
            createBook,
            updateBook,
            deleteBook,

            createShelf
        }
    }
})

module.exports = schema;