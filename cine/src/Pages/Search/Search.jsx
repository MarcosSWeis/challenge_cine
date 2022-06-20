import { useContext } from "react";
import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import Results from "../../Components/searchResults/Results.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { moviesBySearch, getMoviesBySearch } = useContext(MovieContext);
  const { state } = useLocation();
  let { query } = state || {};
  console.log(moviesBySearch, "query search component");

  return (
    <div>
      <div className="image-grid mt-4 w-100 m-auto">
        {Object.keys(moviesBySearch).length > 0 &&
          moviesBySearch.results.map((results) => (
            <Results img={results.poster_path} />
          ))}
        {Object.keys(moviesBySearch).length > 0 && (
          <Paginate
            parameter={query}
            functionToExecute={getMoviesBySearch}
            total_pages={moviesBySearch.total_pages}
            current_page={moviesBySearch.page}
          />
        )}
      </div>
    </div>
  );
}
