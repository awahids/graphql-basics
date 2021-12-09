const typeDefs = `
    type Mutation {
        createShelf(data: CreateShelfInput): Shelf!
        deleteShelf(id: ID!): DeleteRespon!
        updateShelf(id: ID!, data: UpdateShelfInput!): Shelf!
    }

    input CreateShelfInput {
        ShelfName: String!
        bookId: ID
    }

    input UpdateShelfInput {
        ShelfName: String!
    }

    type DeleteRespon {
        id: ID!
    }

    type BookShelf {
        id: ID!
        ShelfName: String!
        bookId: [Book!]!
    }

    type Query {
        Shelfs: [BookShelf]
    }
`;

module.exports = () => [typeDefs];