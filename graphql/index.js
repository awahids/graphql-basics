const { makeExecutableSchema } = require("graphql-tools");

const wrapper = require("./resolvers");

const schemaIndex = require("./typeDefs/typeDefs");

const books = wrapper.books;
const getBookByYear = wrapper.getBookByYear;
const getBookByBookName = wrapper.getBookByBookName;

const shelfs = wrapper.shelfs;
const splitBookAtBookShelfs = wrapper.splitBookAtBookShelfs;
const joinBookAndBookShelf = wrapper.joinBookAndBookShelf;
const replaceIdBook = wrapper.replaceIdBook;

const createShelf = wrapper.createShelf;
const updateShelf = wrapper.updateShelf;
const deleteShelfById = wrapper.deleteShelfById;

const createBook = wrapper.createBook;
const updateBook = wrapper.updateBook;
const deleteBook = wrapper.deleteBook;

const signUp = wrapper.signUp;
const signIn = wrapper.signIn;

const schema = makeExecutableSchema({
  typeDefs: [schemaIndex],

  resolvers: {
    Query: {
      books,
      getBookByYear,
      getBookByBookName,
      replaceIdBook,
      shelfs,
      splitBookAtBookShelfs,
      joinBookAndBookShelf,
    },

    Mutation: {
      createBook,
      updateBook,
      deleteBook,

      createShelf,
      updateShelf,
      deleteShelfById,

      signUp,
      signIn,
    },
  },
});

module.exports = schema;
