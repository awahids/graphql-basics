const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    title: 'Harry Potter',
    author: 'Kate Chopin',
    year: 1990,
  },
  {
    title: 'City of Glass 1',
    author: 'Paul Auster',
    year: 1889,
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    year: 1889,
  },
  {
    title: 'book 1',
    author: 'author 1',
    year: 1890,
  },
];

const typeDefs = gql`
  type Mutation {
    createBook(data: CreateBookInput): Book!
    deleteBook(title: String!): Book!
    updateBook(title: String!, data: UpdateBookInput!): Book!
  }

  input CreateBookInput {
    title: String!
    author: String!
    year: Int
  }

  input UpdateBookInput {
    title: String!
    author: String!
    year: Int
  }

  type Book {
    title: String
    author: String
    year: Int
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation: {
    createBook(parent, args, ctx, info) {
      const titleTaken = books.some((book) => book.title === args.data.title)
      console.log("🚀 ~ file: index.js ~ line 64 ~ createBook ~ args", args)

      if (titleTaken) {
        throw new Error("Title is taken")
      }

      const book = {
        title: args.data.title,
        author: args.data.author,
        year: args.data.year
      }

      books.push(book)

      return book
    },

    deleteBook(parent, args, ctx, info) {
      const bookIndex = books.findIndex((book) => book.title === args.title)

      if (bookIndex === -1) {
        throw new Error("Book not found")
      }

      const deleteBook = books.splice(bookIndex, 1)

      return deleteBook[0]
    },

    updateBook(parent, args, ctx, info) {
      const { title, data } = args
      const book = books.find((book) => book.title === title)

      if (!book) {
        throw new Error('Book not found')
      }

      if (typeof data.title === "string") {
        const titleTaken = books.some((book) => book.title === data.title)

        if (titleTaken) {
          throw new Error('Title taken')
        }

        book.title = data.title
      }

      if (typeof data.author === "string") {
        book.author = data.author
      }

      if (typeof data.year !== "undefined") {
        book.year = data.year
      }

      return book
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
