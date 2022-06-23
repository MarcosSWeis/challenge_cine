import CardCarruselMovie from "./CardCarruselMovie";

export default function Carrusel_movies({ dataMovie, title_carrusel }) {
  let buttons = [0, 1, 2, 3];
  const row = document.querySelectorAll(".container_carrusel");
  const movies = document.querySelectorAll(".movie");

  const handlerRight = (event) => {
    function switchNextCarrusel(index) {
      row[index].scrollLeft +=
        event.target.offsetParent.offsetParent.clientWidth; //offsetWidth;
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Populares de este mes"
    ) {
      switchNextCarrusel(0);
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Mas votadas del año"
    ) {
      switchNextCarrusel(1);
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Películas relacionadas"
    ) {
      switchNextCarrusel(0);
    }
    const indicatorActived = document.querySelector(".indicators .active");

    if (indicatorActived.nextSibling) {
      //pregunto si tieen un hermano a la derecha , si lo tiene..
      //al indicador a la derecha le pongo la clase activo
      indicatorActived.nextSibling.classList.add("active");
      // y al indicador actual le saco el activo
      indicatorActived.classList.remove("active");
    }
  };
  const handlerLeft = (event) => {
    //cuando se ejecute que me haga un scroll
    //accedemos al ancho completo del carrusel
    console.log(event);
    console.log(row, "row");

    // console.log(row.scrollLeft, "scrollLeft");
    // console.log(row.offsetWidth, "offsetWidth");
    function switchLeftCarrusel(index) {
      row[index].scrollLeft -=
        event.target.offsetParent.offsetParent.clientWidth; //offsetWidth;
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Populares de este mes"
    ) {
      switchLeftCarrusel(0);
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Mas votadas del año"
    ) {
      switchLeftCarrusel(1);
    }
    if (
      event.target.offsetParent.offsetParent.children[1].attributes.id.value ==
      "Películas relacionadas"
    ) {
      switchLeftCarrusel(0);
    }

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
  if (row.length > 0) {
    row[0].addEventListener("mouseleave", (event) => {
      movies.forEach((movie) => {
        movie.classList.remove("hover");
      });
    });
  }

  function handlerButtons(event) {
    event.preventDefault();

    row[0].scrollLeft = event.target.value * row[0].offsetWidth;
  }
  return (
    <div className="mt-5 bg_dark ">
      <div className="movies_recomended  container">
        <div className="container_titulo_controller">
          <h3>{title_carrusel}</h3>
          <div className="indicators">
            {buttons.length > 0 &&
              buttons.map((value, index) =>
                value == 0 ? (
                  <button
                    key={index}
                    className="active"
                    value={value}
                    onClick={handlerButtons}
                  ></button>
                ) : (
                  <button
                    key={index}
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
          <div className="container_carrusel" id={title_carrusel}>
            <div className="carrusel">
              {dataMovie.length > 0 &&
                dataMovie.map((movie) => (
                  <CardCarruselMovie
                    title={movie.original_title}
                    img={movie.poster_path}
                    description={movie.overview}
                    key={movie.id}
                    id={movie.id}
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
