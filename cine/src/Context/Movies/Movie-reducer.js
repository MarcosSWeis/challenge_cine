import {
  GET_MOVIES_HOME,
  GET_MOVIE_BY_SEARCH,
  GET_MOVIES_BY_STAR,
  GET_MOVIE_BY_ID,
  GET_MOVIE_RELATED,
  GET_MOVIE_MOST_VOTED,
} from "../actions"; // types

//esta función recibe el estado actual de nuestro contexto y el action va a actualizar mi estado
export default function (state, action) {
  //peyload es mi data y type es el nombre de la acción que voy a ejecutar
  const { payload, type } = action;
  switch (type) {
    case GET_MOVIES_HOME: {
      return {
        ...state,
        moviesPopularMonth: payload,
      };
    }
    case GET_MOVIE_BY_SEARCH: {
      return {
        ...state,
        moviesBySearch: payload,
      };
    }
    case GET_MOVIES_BY_STAR: {
      return {
        ...state,
        moviesFilter: payload,
      };
    }
    case GET_MOVIE_BY_ID: {
      return {
        ...state,
        movie_detail: payload,
      };
    }
    case GET_MOVIE_RELATED: {
      return {
        ...state,
        movies_related: payload,
      };
    }
    case GET_MOVIE_MOST_VOTED: {
      return {
        ...state,
        moviesMostVotedYear: payload,
      };
    }
    default:
      return state;
  }
}
