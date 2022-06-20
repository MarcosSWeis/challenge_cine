import { useRef, useState } from "react";
import CSS from "./filter.module.css";

export default function FilterMovies() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoverRate, setHoverRate] = useState(null);
  const posibleRates = [2, 4, 6, 8, 10];
  let voto_promedio_gte; //mayor =a
  let voto_promedio_lte; //menor =a
  function handlerStarValue() {
    if (selectedRate == 2) {
      voto_promedio_gte = 0;
      voto_promedio_lte = 2;
    }
    if (selectedRate == 4) {
      voto_promedio_gte = 2;
      voto_promedio_lte = 4;
    }
    if (selectedRate == 6) {
      voto_promedio_gte = 4;
      voto_promedio_lte = 6;
    }
    if (selectedRate == 8) {
      voto_promedio_gte = 6;
      voto_promedio_lte = 8;
    }
    if (selectedRate == 10) {
      voto_promedio_gte = 8;
      voto_promedio_lte = 10;
    }
  }

  return (
    <div>
      <h1>{selectedRate}</h1>
      <div
        className="d-flex m-auto"
        id="container_star"
        style={{ maxWidth: "80px" }}
      >
        {posibleRates.map((rate) => (
          <i
            key={rate}
            class={
              `bi bi-star ` +
              (rate <= selectedRate ? ` ${CSS.in_rate} ` : "") +
              (rate <= hoverRate ? ` ${CSS.in_hover} ` : "")
            }
            onClick={() => {
              setSelectedRate(rate);
            }}
            onMouseEnter={() => {
              setHoverRate(rate);
            }}
            onMouseLeave={() => {
              setHoverRate(null);
            }}
          ></i>
        ))}
      </div>
    </div>
  );
}
