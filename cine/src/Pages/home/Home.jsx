import { useContext } from "react";

import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import Results from "../../Components/searchResults/Results.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
function Home() {
  return (
    <div>
      <div>{<Carrusel_movies />}</div>
    </div>
  );
}
export default Home;
