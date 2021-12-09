const typeDefs = `
    type Mutation {
        createBook(data: CreateBookInput): Book!
        deleteBook(id: ID!): DeleteRespon!
        updateBook(id: ID!, data: UpdateBookInput!): Book!
    }

    input CreateBookInput {
        bookName: String!
        author: String!
        year: Int
    }

    input UpdateBookInput {
        bookName: String!
        author: String!
        year: Int
    }

    type DeleteRespon {
        id: ID!
    }

    type Book {
        id: ID!
        bookName: String!
        author: String!
        year: Int
    }

    type Query {
        books: [Book]
    }
`;

module.exports = () => [typeDefs];