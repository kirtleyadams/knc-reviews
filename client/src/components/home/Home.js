import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_MOVIES } from "../../graphql/queries/fetchMovies";

import "./home.css";

import Nav from "../nav/Nav";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Typography from '@material-ui/core/';

const Home = () => {
  const movies = useQuery(ALL_MOVIES);
  const moviesListData = movies.data?.movies || [];
  const loading = moviesListData.loading;

  return loading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <Nav />
      <h1>Most Recent</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          textAlign: "center",
          "& > :not(style)": {
            m: 1,
            width: 250,
            height: 350,
            margin: 2,
            padding: 5
          },
        }}
      >
      {moviesListData.map((movie, index) => (
        <Paper elevation={3}>
          <p>{movie.title}</p>
          <p>Rating: {movie.rating}</p>
          <p>{movie.review}</p>
        </Paper>
        ))}
      </Box>
    </>
  );
};

export default Home;
