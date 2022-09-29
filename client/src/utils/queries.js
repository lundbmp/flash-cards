import { gql } from "@apollo/client";

export const me = gql`
    {
        me {
            _id
            username
            email
        }
    }
`;

export const user = gql`
    query user {
        user {
            _id
            username
            email
            Cards
        }
    }
`;


export const getCategoryCards = gql`
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

export const getSingleCard = gql`
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



export const getUserCards = gql`
    query getUserCards{
        getUserCards {
            _id
            title
            question
            answer

        }
    }
`;