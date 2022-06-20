import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carrusel_movies from "./Components/carruselMovies/Carrusel_movies";
import "./Components/carruselMovies/carrusel-movies.css";
import MovieState from "./Context/Movies/Movie-state";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import FilterMovies from "./Components/Filter/FilterMovies";
import Home from "./Pages/home/Home";

function App() {
  return (
    <div className="App">
      <MovieState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<h2></h2>} />
        </Routes>
      </MovieState>
    </div>
  );
}

export default App;
