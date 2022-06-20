import { useReducer, useState } from "react";
import MovieReducer from "./Movie-reducer";
import MovieContext from "./Movie-context";
import axios from "axios";

const MovieState = (props) => {
  const initialState = {
    moviesHome: [],
    moviesBySearch: [],
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
  const getMoviesBySearch = async ({ query, page }) => {
    console.log(query, "query");
    console.log(page, "page");

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&query=${query.search}&page=${page}&include_adult=false`
    );
    dispatch({
      type: "GET_MOVIE_BY_SEARCH",
      payload: data.results,
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
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
