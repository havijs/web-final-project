import Movies from '../components/Movies';
import NavBar from '../components/NavBar';

export default function({movies, setMovies}) {
    return (
        <div>
            <NavBar />
            <Movies movies={movies} setMovies={setMovies}/>
        </div>
    );
}