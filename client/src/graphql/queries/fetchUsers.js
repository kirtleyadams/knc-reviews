import { gql } from '@apollo/client';

export const FETCH_USER = gql`
    query User($userId: String!) {
        user(id: $userId) {
            _id
            firstName
            lastName
            username
            email
        }
    }
`;

export const FETCH_USERS = gql`
    query fetchUsers {
        users {
            _id
            firstName
            lastName
            username
            email
        }
    }
`;