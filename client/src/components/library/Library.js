import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { ALL_MOVIES } from "../../graphql/queries/fetchMovies";

import "../home/home.css";

import Nav from "../nav/Nav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Library = () => {
  const movies = useQuery(ALL_MOVIES);
  const moviesListData = movies.data?.allMovies || [];
  const loading = moviesListData.loading;

  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <Nav />
      <h1>All Reviews</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 400,
            margin: 2,
          },
        }}
      >
      {moviesListData.map((movie, index) => (
        <Paper elevation={3} key={movie._id}>
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.review}</p>
        </Paper>
        ))}
      </Box>
    </>
  );
};

export default Library;