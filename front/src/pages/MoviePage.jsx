import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button, Paper, Typography } from "@mui/material";
import NavBar from '../components/NavBar';

export default function ({setMovies}) {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [movie, setMovie] = useState(null);
    useEffect(async () => {
        const movieRes = await axios.get('http://localhost:8000/api/movies/' + id);
        setMovie(movieRes.data);
    }, []);
    const handleOnDeleteClick = async () => {
        await axios.delete('http://localhost:8000/api/movies/' + id);
        const moviesRes = await axios.get('http://localhost:8000/api/movies');
        setMovies(moviesRes.data);
        navigate('/');
    }
    return (
        <>
            <NavBar />
            {movie ?
                <Box>
                    <Paper sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                      <img src={movie.fileName ? "http://localhost:8000/uploads/" + movie.fileName : '../default-movie.png'} />
                    </Paper>
                    <Typography>
                        Name: {movie.name}
                    </Typography>
                    <Typography>
                        Year: {movie.year}
                    </Typography>
                    <Typography>
                        Description: {movie.description}
                    </Typography>
                    <Button variant="outlined">
                        <Link to={'/movie/update/' + id} style={{ textDecoration: 'none', color: 'black' }}>
                            Update
                        </Link>
                    </Button>
                    <Button variant="outlined" color="error" onClick={handleOnDeleteClick}>
                        DELETE
                    </Button>
                </Box> : <CircularProgress />
            }
        </>
    );
}