import { GET_MOVIES_DISCOVER } from "./actions";

export const initialState = {
  movieDiscover: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_DISCOVER:
      return {
        ...state,
        movieDiscover: action.payload,
      };

    default:
      return state;
  }
}
