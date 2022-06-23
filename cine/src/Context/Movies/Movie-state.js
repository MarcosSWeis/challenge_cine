import { useReducer, useState } from "react";
import MovieReducer from "./Movie-reducer";
import MovieContext from "./Movie-context";
import axios from "axios";

const MovieState = (props) => {
  const initialState = {
    moviesPopularMonth: [],
    moviesBySearch: {},
    moviesFilter: {},
    movie_detail: null,
    movies_related: [],
    moviesMostVotedYear: [],
  };
  console.log(process.env.REACT_APP_API_KEY);
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  function date() {
    const date = new Date();
    return date;
  }
  const getMoviesPopularThisMonth = async () => {
    try {
      let month = date().getMonth() + 1;
      const year = date().getFullYear();
      if (month < 10) {
        month = "0" + month;
      }
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${year}-${month}-01&with_watch_monetization_types=flatrate`
      );
      console.log(data.results);
      dispatch({
        type: "GET_MOVIES_HOME",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieById = async (id) => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      );
      dispatch({
        type: "GET_MOVIE_BY_ID",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieRelated = async (id) => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: "GET_MOVIE_RELATED",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getMoviesBySearch = async ({ parameter }, page = 1) => {
    try {
      console.log(page, "page movie state");

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${parameter}&page=${page}&include_adult=false`
      );
      dispatch({
        type: "GET_MOVIE_BY_SEARCH",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getMoviesMostVotedYear = async () => {
    try {
      const year = date().getFullYear();
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`
      );
      dispatch({
        type: "GET_MOVIE_MOST_VOTED",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getMoviesByFilterStar = async ({ parameter }, page = 1) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${parameter.avg_gte}&vote_average.lte=${parameter.avg_lte}&with_watch_monetization_types=flatrate`
      );
      dispatch({
        type: "GET_MOVIES_BY_STAR",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        moviesPopularMonth: state.moviesPopularMonth,
        getMoviesPopularThisMonth,
        getMoviesBySearch,
        moviesBySearch: state.moviesBySearch,
        getMoviesByFilterStar,
        moviesFilter: state.moviesFilter,

        getMovieById,
        movie_detail: state.movie_detail,
        getMovieRelated,
        movies_related: state.movies_related,

        getMoviesMostVotedYear,
        moviesMostVotedYear: state.moviesMostVotedYear,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
