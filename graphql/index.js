const { makeExecutableSchema } = require('graphql-tools');

const wrapper = require('./resolvers');

const schemaBook = require('./typeDefs/BookTypeDefs');

const books = wrapper.books;
const getBookByYear = wrapper.getBookByYear;

const createBook = wrapper.createBook;
const updateBook = wrapper.updateBook;
const deleteBook = wrapper.deleteBook;

const schema = makeExecutableSchema({
    typeDefs: [  
        schemaBook
    ],

    resolvers: {
        Query: {
            books,
            getBookByYear
        },

        Mutation: {
            createBook,
            updateBook,
            deleteBook
        }
    }
})

module.exports = schema;