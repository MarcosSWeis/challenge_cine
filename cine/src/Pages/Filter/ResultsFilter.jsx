import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Paginate from "../../Components/Paginate/Paginate";
import Results from "../../Components/searchResults/Results";
import MovieContext from "../../Context/Movies/Movie-context";

export default function ResultsFilter() {
  const { moviesFilter, getMoviesByFilterStar } = useContext(MovieContext);
  const { state } = useLocation();
  const { avg, rate } = state || {};
  return (
    <div>
      <div className="image-grid mt-4 w-100 m-auto">
        <h2 className="text-center">
          Resultados de la búsqueda por {rate / 2} estrellas
        </h2>
        {Object.keys(moviesFilter).length > 0 &&
          moviesFilter.results.map((results) => (
            <Results
              id={results.id}
              img={results.poster_path}
              key={results.id}
            />
          ))}
        {Object.keys(moviesFilter).length > 0 && (
          <Paginate
            parameter={avg}
            functionToExecute={getMoviesByFilterStar}
            total_pages={moviesFilter.total_pages}
            current_page={moviesFilter.page}
          />
        )}
      </div>
    </div>
  );
}
