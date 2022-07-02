const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
    }

    type Movie {
        _id: ID
        title: String
        plot: String
        genre: String
        year: Int
        poster: String
        director: String
        rating: Int
        review: String
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        user(id: String!): User
        users: [User]
    }

    type Mutation {
        createUser(
            firstName: String!, 
            lastName: String!, 
            username: String!, 
            email: String!, 
            password: String!,
        ): Auth
        createMovie(
            title: String!,
            plot: String!,
            genre: String!,
            year: Int!,
            poster: String!,
            director: String!,
            rating: Int!,
            review: String!,
        ): Auth
        login(
            email: String!, 
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;