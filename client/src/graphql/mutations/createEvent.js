import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
mutation createMovie($title: String!, $plot: String!, $genre: String!, $year: Int!, $poster: String, $director: String, $rating: String, $review: String!) {
  createMovie(title: $title, plot: $plot, genre: $genre, year: $year, poster: $poster, director: $director, rating: $rating, review: $review) {
  }
}
`;