const typeDefs = `
    type Mutation {
        createShelf(data: CreateShelfInput): BookShelf!
        deleteShelf(id: ID!): DeleteShelf!
        updateShelf(id: ID!, data: UpdateShelfInput!): BookShelf!
    }

    input CreateShelfInput {
        ShelfName: String!
        bookId: ID
    }

    input UpdateShelfInput {
        ShelfName: String!
    }

    type DeleteShelf {
        id: ID!
    }

    type BookShelf {
        id: ID!
        ShelfName: String!
        bookId: [Book!]!
    }

    type Query {
        shelfs: [BookShelf]
    }
`;

module.exports = () => [typeDefs];