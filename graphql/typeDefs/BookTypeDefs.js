const typeDefs = `
    type Mutation {
        createBook(data: CreateBookInput): Book!
        deleteBook(id: ID!): DeleteRespon!
        updateBook(id: ID!, data: UpdateBookInput!): Book!

        createShelf(data: CreateShelfInput): BookShelfs!
        deleteShelf(id: ID!): DeleteShelf!
        updateShelf(id: ID!, data: UpdateShelfInput!): BookShelfs!
    }

    input CreateBookInput {
        shelfId: ID!
        bookName: String!
        author: String!
        year: Int!
    }

    input CreateShelfInput {
        shelfName: String!
    }

    input UpdateBookInput {
        bookName: String!
        author: String!
        year: Int
    }

    input UpdateShelfInput {
        shelfName: String!
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
        shelfId: ID
    }
    
    type BookCollect {
        _id: ID!
        bookName: String!
        author: String!
        year: Int!
    }

    type BookShelfs {
        _id: ID!
        shelfName: String!
        bookId: [BookCollect!]
    }

    type Query {
        books(limit: Int, offset: Int): [Book!]
        shelfs: [BookShelfs]
        getBookByYear(year: Int!): [ProjectRespon!]!
    }
`;

module.exports = () => [typeDefs];