import { GET_MOVIES_HOME, GET_MOVIE_BY_SEARCH } from "../actions"; // types

//esta función recibe el estado actual de nuestro contexto y el action va a actualizar mi estado
export default function (state, action) {
  //peyload es mi data y type es el nombre de la acción que voy a ejecutar
  const { payload, type } = action;
  switch (type) {
    case GET_MOVIES_HOME: {
      return {
        ...state,
        moviesHome: payload,
      };
    }
    case GET_MOVIE_BY_SEARCH: {
      return {
        ...state,
        moviesBySearch: payload,
      };
    }
    default:
      return state;
  }
}
