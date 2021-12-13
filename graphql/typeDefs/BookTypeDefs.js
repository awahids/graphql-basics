const typeDefs = `
    type Mutation {
        createBook(_id: ID!, data: CreateBookInput): Book!
        deleteBook(_id: ID!): DeleteRespon!
        updateBook(_id: ID!, data: UpdateBookInput!): Book!

        createShelf(data: CreateShelfInput): BookShelfs!
        addBookIdByAddFields(_id: ID!, data: [BookIdByAddFieldsInput!]): ResponAddFields!
        deleteShelf(_id: ID!): DeleteShelf!
        updateShelf(_id: ID!, data: UpdateShelfInput!): BookShelfs!
    }
    
    input BookIdByAddFieldsInput {
        bookId: ID!
    }

    type ResponAddFields {
        bookId: [BookCollect!]
    }

    input CreateBookInput {
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
        _id: ID!
    }

    type DeleteShelf {
        _id: ID!
    }

    type ProjectRespon {
        authorOfBook: String!
        year: Int!
        yearGt: Boolean!
    }

    type BookCollect {
        _id: ID!
        bookName: String!
        author: String!
        year: Int!
    }

    type splitBook {
        _id: ID!
        shelfName: String!
        bookId: ID!
    }

    type Book {
        _id: ID!
        bookName: String!
        author: String!
        year: Int!
        shelfId: ID
    }

    type BookShelfs {
        _id: ID!
        shelfName: String!
        bookId: [BookCollect!]
    }

    type JoinLookUp {
        _id: ID!
        bookId: [Book!]
        shelfName: String!
    }

    type Query {
        books(limit: Int, offset: Int): [Book!]
        shelfs: [BookShelfs!]!
        getBookByYear(year: Int!): [ProjectRespon!]!
        splitBookAtBookShelfs: [splitBook!]!
        getBookByBookName(bookName: String!): [BookCollect!]!
        joinBookAndBookShelf: [JoinLookUp!]!
        replaceIdBook: [Book!]!
    }
`;

module.exports = () => [typeDefs];