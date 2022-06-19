import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import $ from "jquery";
import CardCarruselMovie from "../rowCarruselMovies/CardCarruselMovie";
const CarruselImg = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;
export default function Carrusel_movies() {
  let [discover, setDiscover] = useState([]);
  const [numberPage, setNumberPage] = useState(0);
  const date = new Date();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10) {
    month = "0" + month;
  }
  console.log(date, "date");
  console.log(month, "month");

  console.log(year, "year");

  //const moviesDiscover = useSelector((state) => state.movieDiscover);
  async function getmovies() {
    let responseMovie = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=10130f62218e9cc35361e52eb1fb8a01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${year}-${month}-01&with_watch_monetization_types=flatrate`
    );
    setDiscover(responseMovie.data.results);
    setNumberPage(Math.ceil(responseMovie.data.results.length / 5));
    //porque muestro solo 5 pelis y despues scrolleo sobre x
    //Math.ceil redonde hacia arriba , por si es un numero decimal
  }
  console.log(discover);
  let buttons = [0, 1, 2, 3];
  useEffect(() => {
    getmovies();
  }, []);
  const row = document.querySelector(".container_carrusel");
  const movies = document.querySelectorAll(".movie");

  const handlerRight = () => {
    //cuando se quejucte que me haga un scroll
    //accedemos al ancho completo del carrusel
    row.scrollLeft += row.offsetWidth;
    const indicatorActived = document.querySelector(".indicators .active");
    if (indicatorActived.nextSibling) {
      //pregunto si tieen un hermano a la derecha , si lo tiene..
      //al indicador a la derecha le pongo la clase activo
      indicatorActived.nextSibling.classList.add("active");
      // y al indicador actual le saco el activo
      indicatorActived.classList.remove("active");
    }
  };
  const handlerLeft = () => {
    //cuando se quejucte que me haga un scroll
    //accedemos al ancho completo del carrusel
    row.scrollLeft -= row.offsetWidth;
    const indicatorActived = document.querySelector(".indicators .active");
    if (indicatorActived.previousSibling) {
      //pregunto si tieen un hermano a la derecha , si lo tiene..
      //al indicador a la derecha le pongo la clase activo
      indicatorActived.previousSibling.classList.add("active");
      // y al indicador actual le saco el activo
      indicatorActived.classList.remove("active");
    }
  };

  //pages carrusel

  movies.forEach((movie) => {
    //dispara el evento cuando ingresamos a la region
    movie.addEventListener("mouseenter", (event) => {
      const element = event.currentTarget;
      setTimeout(() => {
        movies.forEach((movie) => {
          movie.classList.remove("hover");
          element.classList.add("hover");
        });
      }, 350);
    });
  });

  //mouseleave caundo saco el cursos del elemento dispara el evento
  if (row) {
    row.addEventListener("mouseleave", (event) => {
      movies.forEach((movie) => {
        movie.classList.remove("hover");
      });
    });
  }

  function handlerButtons(event) {
    event.preventDefault();

    row.scrollLeft = event.target.value * row.offsetWidth;
  }
  return (
    <div className="mt-5">
      <div className="movies_recomended  container">
        <div className="container_titulo_controller">
          <h3>Descubrir</h3>
          <div className="indicators">
            {buttons.length > 0 &&
              buttons.map((value, index) =>
                value == 0 ? (
                  <button
                    key={value}
                    className="active"
                    value={value}
                    onClick={handlerButtons}
                  ></button>
                ) : (
                  <button
                    key={value}
                    value={value}
                    onClick={handlerButtons}
                  ></button>
                )
              )}
          </div>
        </div>

        <div className="main_container">
          <button className="left_arrow" id="left_arrow" onClick={handlerLeft}>
            <i class="bi bi-chevron-compact-left"></i>
          </button>
          <div className="container_carrusel" id="container_carrusel">
            <div className="carrusel">
              {discover.length > 0 &&
                discover.map((movie) => (
                  <CardCarruselMovie
                    title={movie.original_title}
                    img={movie.poster_path}
                    description={movie.overview}
                    key={movie.id}
                  />
                ))}
            </div>
          </div>
          <button
            className="right_arrow"
            id="right_arrow"
            onClick={handlerRight}
          >
            <i class="bi bi-chevron-compact-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
