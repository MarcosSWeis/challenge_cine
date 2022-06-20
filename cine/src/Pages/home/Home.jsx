import { useContext } from "react";

import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import SearchResults from "../../Components/searchResults/SearchResults.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
function Home() {
  const { moviesBySearch } = useContext(MovieContext);
  return (
    <div>
      <div>{moviesBySearch.length <= 0 && <Carrusel_movies />}</div>
    </div>
  );
}
export default Home;
