import { useContext } from "react";
import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import SearchResults from "../../Components/searchResults/SearchResults.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { moviesBySearch, getMoviesBySearch } = useContext(MovieContext);
  const { state } = useLocation();
  const { query } = state || {};
  console.log(moviesBySearch);

  return (
    <div>
      <div className="image-grid mt-4 w-100 m-auto">
        {Object.keys(moviesBySearch).length > 0 &&
          moviesBySearch.results.map((results) => (
            <SearchResults img={results.poster_path} />
          ))}
        {Object.keys(moviesBySearch).length > 0 && (
          <Paginate query={query} functionToExecute={getMoviesBySearch} />
        )}
      </div>
    </div>
  );
}
