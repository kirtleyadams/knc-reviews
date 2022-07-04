import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { ALL_MOVIES } from '../../graphql/queries/fetchMovies';

import "./home.css";

import Nav from '../nav/Nav';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const Home = () => {
  const movies = useQuery(ALL_MOVIES);
  const moviesListData = movies.data?.allMovies || [];
  const loading = moviesListData.loading;
  // movie data not being loaded
  console.log(moviesListData)



  return loading ?
    <>
      <h1>Loading...</h1>
    </>
    :

    <>
      
        <Nav/>
      <h1>Most Recent</h1>
      <Grid align='center' container spacing={3}>
        <Grid item xs={2}>
            <Grid>1
                
            </Grid>
        </Grid>
        <Grid item xs={2}>
            <Grid>2</Grid>
        </Grid>
        <Grid item xs={2}>
            <Grid>3</Grid>
        </Grid>
        <Grid item xs={2}>
            <Grid>4</Grid>
        </Grid>
        <Grid item xs={2}>
            <Grid>5</Grid>
        </Grid>
       </Grid>

      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Title</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rating</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {moviesListData.map((movie, index) => (
            <TableRow
              key={movie._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              width='100'
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{movie.title}</TableCell>
              <TableCell align="center">{movie.rating}</TableCell>
              <TableCell align="center">{movie.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  };

export default Home;