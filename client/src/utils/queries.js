import { gql } from "@apollo/client";

export const ME = gql`
    {
        me {
            _id
            username
            email
            Cards
        }
    }
`;

export const USER = gql`
    query user {
        user {
            _id
            username
            email
        }
    }
`;


export const GET_CATEGORY_CARDS = gql`
    query getCategoryCards($category: String!) {
        getCategoryCards(category: $category) {
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

export const GET_SINGLE_CARD = gql`
    query getSingleCard($_id: ID!) {
        getSingleCard(_id: $_id) {
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



export const GET_USER_CARDS = gql`
    query getUserCards{
        getUserCards {
            _id
            title
            question
            answer

        }
    }
`;