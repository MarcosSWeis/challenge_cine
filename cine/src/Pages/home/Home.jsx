import { useContext, useEffect } from "react";

import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import Results from "../../Components/searchResults/Results.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
function Home() {
  const {
    moviesPopularMonth,
    getMoviesPopularThisMonth,
    getMoviesMostVotedYear,
    moviesMostVotedYear,
  } = useContext(MovieContext);
  console.log(moviesMostVotedYear, "moviesMostVotedYear");
  useEffect(() => {
    getMoviesPopularThisMonth();
    getMoviesMostVotedYear();
  }, []);
  return (
    <div>
      <div>
        <Carrusel_movies
          dataMovie={moviesPopularMonth}
          title_carrusel={"Populares de este mes"} //descubrir de la consigna
        />
      </div>
      <div>
        <Carrusel_movies
          dataMovie={moviesMostVotedYear}
          title_carrusel={"Mas votadas del año"}
        />
      </div>
    </div>
  );
}
export default Home;
