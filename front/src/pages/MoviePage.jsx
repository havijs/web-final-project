import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Paper, Typography } from "@mui/material";
import NavBar from '../components/NavBar';

export default function () {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(async () => {
        const movieRes = await axios.get('https://localhost:8000/api/movies/' + id);
        setMovie(movieRes.data);
    }, []);
    return (
        <>
            <NavBar />
            {movie ?
                <Box>
                    <Paper sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                      <img src={movie.fileName ? "https://localhost:8000/uploads/" + movie.fileName : '../default-movie.png'} />
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
                </Box> : <CircularProgress />
            }
        </>
    );
}