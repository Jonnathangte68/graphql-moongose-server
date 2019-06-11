const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    username: String
    email: String
}
type Query {
    getUsers: [User]
}
type Mutation {
    addUser(userName: String!, email: String!): User
}
`;

module.exports = typeDefs;