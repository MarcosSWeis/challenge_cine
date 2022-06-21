import { useReducer, useState } from "react";
import MovieReducer from "./Movie-reducer";
import MovieContext from "./Movie-context";
import axios from "axios";

const MovieState = (props) => {
  const [page, setPage] = useState(1);

  const initialState = {
    moviesHome: [],
    moviesBySearch: {},
    moviesFilter: {},
    movie_detail: null,
    movies_related: [],
    rate_movie: null,
    page,
    setPage,
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMoviesRecommended = async () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (month < 10) {
      month = "0" + month;
    }
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${year}-${month}-01&with_watch_monetization_types=flatrate`
    );
    console.log(data.results);
    dispatch({
      type: "GET_MOVIES_HOME",
      payload: data.results,
    });
  };

  const getMovieById = async (id) => {
    // console.log(id, "movie state");
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=10130f62218e9cc35361e52eb1fb8a01&append_to_response=videos`
    );
    dispatch({
      type: "GET_MOVIE_BY_ID",
      payload: data,
    });
  };

  const getMovieRelated = async (id) => {
    //id de la pelicula similar
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&page=1`
    );
    dispatch({
      type: "GET_MOVIE_RELATED",
      payload: data.results,
    });
  };

  const getRateMovie = async (id) => {
    //id de la pelicula a buscar el rate
    let { data } = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=10130f62218e9cc35361e52eb1fb8a01`,
      {
        headers: { "Content-type": "application/json; charset=utf-8" },
      }
    );

    dispatch({
      type: "GET_RATE_MOVIE",
      payload: data,
    });
  };

  const getMoviesBySearch = async ({ parameter }) => {
    /* console.log(parameter, "query movie state");
    console.log(page, "page"); */

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&query=${parameter}&page=${page}&include_adult=false`
    );
    dispatch({
      type: "GET_MOVIE_BY_SEARCH",
      payload: data,
    });
  };

  const getMoviesByFilterStar = async ({ parameter }) => {
    /* console.log(parameter.avg_gte, "avg_gte");
    console.log(parameter.avg_lte, "avg_lte");
    console.log(page, "page");
 */
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${parameter.avg_gte}&vote_average.lte=${parameter.avg_lte}&with_watch_monetization_types=flatrate`
    );
    dispatch({
      type: "GET_MOVIES_BY_STAR",
      payload: data,
    });
  };
  //cualqueir componente que este dentro de este movieSate
  //componentes que van dentro de este
  return (
    <MovieContext.Provider
      value={{
        moviesHome: state.moviesHome,
        getMoviesRecommended,
        getMoviesBySearch,
        moviesBySearch: state.moviesBySearch,
        getMoviesByFilterStar,
        moviesFilter: state.moviesFilter,
        page,
        setPage,
        getMovieById,
        movie_detail: state.movie_detail,
        getMovieRelated,
        movies_related: state.movies_related,
        getRateMovie,
        rate_movie: state.rate_movie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
