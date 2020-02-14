// const { gql } = require('apollo-server')
//
// const typeDefs = gql`
//   type User {
//     id: Int!
//     email: String!
//     desk: Desk!
//   }
//
//   type Desk {
//     id: Int!
//     name: String!
//     companyName: String
//     companyRpm: String
//     street: String
//     postcode: Int
//     city: String
//     phone: String
//     fax: String
//     email: String
//     enabledAt: String
//     users: [User!]!
//   }
//
//   type Query {
//     allDesks: [Desk!]!
//     desk(id: Int!): Desk
//     allUsers: [User!]!
//     user(id: Int!): User
//   }
//
//   type Mutation {
//     createDesk(
//       name: String!
//     ): Desk!
//     createUser(
//       deskId: Int!
//       email: String!
//       password: String!
//     ): User!
//   }
// `
//
// module.exports = typeDefs
