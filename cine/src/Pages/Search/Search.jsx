import { useContext } from "react";
import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import Results from "../../Components/searchResults/Results.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader.jsx";

export default function Search() {
  const { moviesBySearch, getMoviesBySearch } = useContext(MovieContext);
  const { state } = useLocation();
  let { query } = state || {};
  console.log(moviesBySearch, "query search component");

  return (
    <div>
      <h2 className="mt-2 text-center">Resultados de la búsqueda</h2>
      <div className="image-grid mt-4 w-100 m-auto">
        {Object.keys(moviesBySearch).length > 0 ? (
          moviesBySearch.results.length > 0 ? (
            moviesBySearch.results.map((results) => (
              <Results img={results.poster_path} id={results.id} />
            ))
          ) : (
            <Loader />
          )
        ) : (
          <h1 className="text-center">
            Esperando a que busquesques una pelicula
          </h1>
        )}
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
