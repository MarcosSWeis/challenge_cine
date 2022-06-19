import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carrusel_movies from "./Components/carruselMovies/Carrusel_movies";
import "./Components/carruselMovies/carrusel-movies.css";
function App() {
  return (
    <div className="App">
      <Carrusel_movies />
    </div>
  );
}

export default App;
