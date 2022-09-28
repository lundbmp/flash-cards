const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        cards: [card_id]
    }

    type Card {
        _id: ID
        title: String
        question: String
        answer: String
        category: String
        difficulty: Int
        createdAt: Date
        createdBy: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {

    }
`;

module.exports = typeDefs;