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

export const addCard = gql`
    mutation addCard($title: String!, $question: String!, $answer: String!, $category: String!, $difficulty: Int!) {
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

export const deleteCard = gql`
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

export const addUser = gql`
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
