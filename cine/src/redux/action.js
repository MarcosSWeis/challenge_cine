import axios from "axios";
//actions
export const GET_MOVIES_DISCOVER = "GET_MOVIES_DISCOVER";

export const getMoviesDiscover = (payload) => {
  try {
    console.log(payload);
    return async function (dispatch) {
      const discover = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        {
          params: payload,
        }
      );
      dispatch({
        type: GET_MOVIES_DISCOVER,
        payload: discover.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
