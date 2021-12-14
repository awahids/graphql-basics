const typeDefs = `
    type Mutation {
        createBook(_id: ID!, data: CreateBookInput): Book!
        deleteBook(_id: ID!): DeleteRespon!
        updateBook(_id: ID!, data: UpdateBookInput!): Book!

        createShelf(data: CreateShelfInput): BookShelfs!
        deleteShelfById(_id: ID!): DeleteShelf!
        updateShelf(_id: ID!, data: UpdateShelfInput!): BookShelfs!

        signUp(data: SignUpInput): User!
        signIn(data: SignInInput): SignIn!
    }

    type Query {
        books(limit: Int, offset: Int): BookData
        shelfs: [BookShelfs!]!
        getBookByYear(year: Int!): [ProjectRespon!]!
        splitBookAtBookShelfs: [splitBook!]!
        getBookByBookName(bookName: String!): [BookCollect!]!
        joinBookAndBookShelf: [JoinLookUp!]!
        replaceIdBook: [Book!]!
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

    type BookData {
        data: [Book]
        error: String
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

    type User {
        _id: ID!
        email: String!
        name: String!
        password: String!
    }

    type SignIn {
        token: String!
    }

    input SignUpInput {
        email: String!
        password: String!
        name: String!
    }

    input SignInInput {
        email: String!
        password: String!
    }
`;

module.exports = () => [typeDefs];
