import { gql } from '@apollo/client';

export const CREATE_REVIEW = gql`
mutation createReview($title: String!, $plot: String!, $genre: String!, $year: Int!, $poster: String!, $director: String!, $rating: Int!, $review: String!) {
  createReview(title: $title, plot: $plot, genre: $genre, year: $year, poster: $poster, director: $director, rating: $rating, review: $review) {
    token
  }
}
`;