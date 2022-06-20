import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Paginate from "../../Components/Paginate/Paginate";
import Results from "../../Components/searchResults/Results";
import MovieContext from "../../Context/Movies/Movie-context";

export default function ResultsFilter() {
  const { moviesFilter, getMoviesByFilterStar } = useContext(MovieContext);
  console.log(moviesFilter);
  const { state } = useLocation();
  const { avg } = state || {};
  //   console.log(avg, "avg");
  return (
    <div>
      <div className="image-grid mt-4 w-100 m-auto">
        {Object.keys(moviesFilter).length > 0 &&
          moviesFilter.results.map((results) => (
            <Results key={results.id} img={results.poster_path} />
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
