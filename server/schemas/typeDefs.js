const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    Cards: [ID]
  }

  type Card {
    _id: ID
    createdAt: String 
    question: String
    answer: String
    category: String
    createdBy: String
    difficulty: Int
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user: [User]
    getCategoryCards(category: String!): [Card]
    getSingleCard(_id: ID!): Card
    getUserCards: [Card]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCard(title: String!, question: String!, answer: String!, category: String!, difficulty: Int!): Card
    deleteCard(_id: ID!): Card
  }
`;

module.exports = typeDefs;