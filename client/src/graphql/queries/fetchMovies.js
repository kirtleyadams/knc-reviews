import { gql } from '@apollo/client';

const ALL_MOVIES = gql`
    query movies {
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

export {
    ALL_MOVIES,
};