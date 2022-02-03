import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

export default function NestedGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
      const moviesRes = await axios('https://localhost:8000/api/movies');
      setMovies(moviesRes.data);
  }, []);
  return (
    <Box sx={{ flexGrow: 1, marginTop: '2rem'}}>
      <Grid container spacing={1} sx={{ alignItems: 'center'}}>
        {movies.map((movie) => {
            return (
                <Grid item md={4} sm={6} xs={12} key={movie.id}>
                  <Movie name={movie.name} year={movie.year} pictureName={movie.picture_name}/>
                </Grid>
                )
        })}
      </Grid>
    </Box>
  );
}