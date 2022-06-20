import { useContext } from "react";
import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import SearchResults from "../../Components/searchResults/SearchResults.jsx";
import MovieContext from "../../Context/Movies/Movie-context";

export default function Search() {
  const { moviesBySearch } = useContext(MovieContext);
  return (
    <div>
      {/*  {moviesBySearch.length > 0 ?? */} <Carrusel_movies />
      {/* } */}
      <div className="image-grid mt-4 w-75 m-auto">
        {moviesBySearch.length > 0 &&
          moviesBySearch.map((results) => (
            <SearchResults img={results.poster_path} />
          ))}
        {moviesBySearch.length > 0 && <Paginate />}
      </div>
    </div>
  );
}
