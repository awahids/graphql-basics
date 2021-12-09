const { makeExecutableSchema } = require('graphql-tools');

const wrapper = require('./resolvers');

const schemaBook = require('./typeDefs/BookTypeDefs');
// const schemaShelf = require('./typeDefs/BookShelfTypeDefs');

const books = wrapper.books;
const getBookByYear = wrapper.getBookByYear;

const shelfs = wrapper.shelfs

const createBook = wrapper.createBook;
const updateBook = wrapper.updateBook;
const deleteBook = wrapper.deleteBook;

const schema = makeExecutableSchema({
    typeDefs: [  
        schemaBook
        // schemaShelf
    ],

    resolvers: {
        Query: {
            books,
            getBookByYear,
            shelfs
        },

        Mutation: {
            createBook,
            updateBook,
            deleteBook
        }
    }
})

module.exports = schema;