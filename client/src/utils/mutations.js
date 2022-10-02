import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_CARD = gql`
    mutation addCard($title: String!, $question: String!, $answer: String!, $category: String!, $difficulty: String!) {
        add(title: $title, question: $question, answer: $answer, category: $category, difficulty: $difficulty) {
            _id
            title
            question
            answer
            category
            difficulty
        }
    }
`;

export const DELETE_CARD = gql`
    mutation deleteCard($_id: ID!) {
        deleteCard(_id: $_id) {
            _id
            title
            question
            answer
            category
            difficulty
            createdAt
            createdBy
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
}
`;
