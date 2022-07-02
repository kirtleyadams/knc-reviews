import { gql } from '@apollo/client';

const FETCH_MOVIES = gql`
    query allMovies {
        movies {
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