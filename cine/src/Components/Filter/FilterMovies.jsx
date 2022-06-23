import { useContext } from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../Context/Movies/Movie-context";
import CSS from "./filter.module.css";

export default function FilterMovies() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoverRate, setHoverRate] = useState(null);
  const { getMoviesByFilterStar } = useContext(MovieContext);
  let navigate = useNavigate();
  //console.log(moviesFilter, "moviesFilter");
  const posibleRates = [2, 4, 6, 8, 10];
  function getAverage(selectedRate) {
    let vote_average_gte; //mayor =a
    let vote_average_lte; //menor =a
    //console.log(selectedRate, "selectedRate");
    if (selectedRate == 2) {
      vote_average_gte = 0;
      vote_average_lte = 2;
    }
    if (selectedRate == 4) {
      vote_average_gte = 2;
      vote_average_lte = 4;
    }
    if (selectedRate == 6) {
      vote_average_gte = 4;
      vote_average_lte = 6;
    }
    if (selectedRate == 8) {
      vote_average_gte = 6;
      vote_average_lte = 8;
    }
    if (selectedRate == 10) {
      vote_average_gte = 8;
      vote_average_lte = 10;
    }
    let avg = {
      avg_gte: vote_average_gte,
      avg_lte: vote_average_lte,
    };
    return avg;
  }

  function navigateToFilter(rate) {
    navigate("/filter", {
      state: { avg: getAverage(rate), rate },
    });
  }
  function getMoviesContext(rate) {
    getMoviesByFilterStar({ parameter: { ...getAverage(rate) } });
  }
  return (
    <div>
      <h6 className="text-center">filtrar por puntuación</h6>
      <div
        className="d-flex m-auto"
        id="container_star"
        style={{ maxWidth: "80px" }}
      >
        {posibleRates.map((rate) => (
          <i
            key={rate}
            values={rate}
            class={
              `bi bi-star-fill ` +
              (rate <= selectedRate ? ` ${CSS.in_rate} ` : "") +
              (rate <= hoverRate ? ` ${CSS.in_hover} ` : "")
            }
            onClick={() => {
              setSelectedRate(rate);
              getMoviesContext(rate);
              navigateToFilter(rate);
            }}
            onMouseEnter={(e) => {
              e.preventDefault();
              setHoverRate(rate);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHoverRate(null);
            }}
          ></i>
        ))}
      </div>
    </div>
  );
}
