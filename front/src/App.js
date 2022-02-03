import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMoviePage from "./pages/CreateMoviePage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/create" element={<CreateMoviePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
