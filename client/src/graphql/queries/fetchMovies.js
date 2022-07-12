import { gql } from '@apollo/client';

export const RECENT_MOVIES = gql`
    query movies {
        recentMovies {
            _id
            title
            plot
            genre
            year
            poster
            director
            rating
            review
        }
    }
`;

export const ALL_MOVIES = gql`
    query movies {
        allMovies {
            _id
            title
            plot
            genre
            year
            poster
            director
            rating
            review
        }
    }
`;