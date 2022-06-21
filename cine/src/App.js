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
import BottomNavbar from "./Components/Navbar/BottomNavbar";
import ResultsFilter from "./Pages/Filter/ResultsFilter";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <MovieState>
        <Navbar />
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<ResultsFilter />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </MovieState>
    </div>
  );
}

export default App;
