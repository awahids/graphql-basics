const typeDefs = `
    type Mutation {
        createBook(data: CreateBookInput): Book!
        deleteBook(id: ID!): DeleteRespon!
        updateBook(id: ID!, data: UpdateBookInput!): Book!
        createShelf(data: CreateShelfInput): BookShelf!
        deleteShelf(id: ID!): DeleteShelf!
        updateShelf(id: ID!, data: UpdateShelfInput!): BookShelf!
    }

    input CreateBookInput {
        shelfId: ID!
        bookName: String!
        author: String!
        year: Int!
    }

    input CreateShelfInput {
        ShelfName: String!
        bookId: ID
    }

    input UpdateBookInput {
        bookName: String!
        author: String!
        year: Int
    }

    input UpdateShelfInput {
        ShelfName: String!
    }

    type DeleteRespon {
        id: ID!
    }

    type DeleteShelf {
        id: ID!
    }

    type ProjectRespon {
        bookName: String!
        year: Int!
        yearGt: Boolean!
    }

    type Book {
        id: ID!
        bookName: String!
        author: String!
        year: Int!
        shelfId: [BookShelf]
    }

    type BookShelf {
        id: ID!
        ShelfName: String!
        bookId: [Book!]!
    }

    type Query {
        books(limit: Int, offset: Int): [Book!]
        shelfs: [BookShelf]
        getBookByYear(year: Int!): [ProjectRespon!]!
    }
`;

module.exports = () => [typeDefs];