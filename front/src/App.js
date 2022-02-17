import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMoviePage from "./pages/CreateMoviePage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import UpdateMovie from "./pages/UpdateMoviePage";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage movies={movies} setMovies={setMovies}/>} />
          <Route path="/movie/create" element={<CreateMoviePage />} />
          <Route path="/movie/:id" element={<MoviePage setMovies={setMovies} />} />
          <Route path="/movie/update/:id" element={<UpdateMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
