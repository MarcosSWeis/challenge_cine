import { useContext, useEffect } from "react";

import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies.jsx";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import Results from "../../Components/searchResults/Results.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
function Home() {
  const { moviesHome, getMoviesRecommended } = useContext(MovieContext);
  const title_carrusel = "Descubrir";
  useEffect(() => {
    getMoviesRecommended();
  }, []);
  return (
    <div>
      <div>
        <Carrusel_movies
          dataMovie={moviesHome}
          title_carrusel={title_carrusel}
        />
      </div>
    </div>
  );
}
export default Home;
