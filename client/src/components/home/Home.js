import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { RECENT_MOVIES } from "../../graphql/queries/fetchMovies";

import "./home.css";

import Nav from "../nav/Nav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Link} from 'react-router-dom';

const Home = () => {
  const movies = useQuery(RECENT_MOVIES);
  const moviesListData = movies.data?.recentMovies || [];
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
        <Paper elevation={3} key={movie._id}>
          <img src={movie.poster} alt={movie.title} width="225" height="250"></img>
          <p>{movie.title}</p>
          <p>Rating: {movie.rating}</p>
          <p>{movie.review}</p>
        </Paper>
        ))}
      </Box>

      <h2> <Link to ="/library">View Library</Link> </h2>
    </>
  );
};

export default Home;