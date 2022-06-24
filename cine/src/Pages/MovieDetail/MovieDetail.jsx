import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrusel_movies from "../../Components/carruselMovies/Carrusel_movies";
import Detail from "../../Components/MovieDetail/Detail";
import MovieContext from "../../Context/Movies/Movie-context";

export default function MovieDetail() {
  let { id } = useParams();
  console.log(id, "movie_detail");
  const { movie_detail, getMovieById, movies_related, getMovieRelated } =
    useContext(MovieContext);
  useEffect(() => {
    getMovieById(id);
    getMovieRelated(id);
  }, [id]);

  return (
    <div>
      {movie_detail && (
        <Detail
          title={movie_detail.title}
          genres={movie_detail.genres} //array
          description={movie_detail.overview}
          release_date={movie_detail.release_date}
          videos={movie_detail.videos.results} //array
          vote_average={movie_detail.vote_average}
          poster_path={movie_detail.poster_path}
        />
      )}
      {movies_related.length > 0 && (
        <div className="mt-5">
          {
            <Carrusel_movies
              dataMovie={movies_related}
              title_carrusel={"Películas relacionadas"}
            />
          }
        </div>
      )}
    </div>
  );
}
