import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { Button, Input, TextField } from '@mui/material';

export default function NestedGrid() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  useEffect(async () => {
      const moviesRes = await axios.get('https://localhost:8000/api/movies');
      setMovies(moviesRes.data);
  }, []);
  const handleFilter = async () => {
      const params = {};
      if(name) {
          params.name = name;
      }
      if(year) {
          params.year = year;
      }
      const moviesRes = await axios.get('https://localhost:8000/api/movies', {
          params
      });
      setMovies(moviesRes.data);
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: '2rem'}}>
      <Input placeholder="name" value={name} onChange={(e) => {setName(e.target.value);}}/>
      <Input placeholder="year" type='number' value={year} onChange={(e) => {setYear(e.target.value);}} />
      <Button onClick={handleFilter}>Apply</Button>
      <Grid container spacing={1} sx={{ alignItems: 'center'}}>
        {movies.map((movie) => {
            return (
                <Grid item md={4} sm={6} xs={12} key={movie.id}>
                  <Movie id={movie.id} name={movie.name} year={movie.year} pictureName={movie.picture_name}/>
                </Grid>
                )
        })}
      </Grid>
    </Box>
  );
}