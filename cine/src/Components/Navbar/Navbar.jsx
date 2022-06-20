import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieContext from "../../Context/Movies/Movie-context";
import logo from "../../img/navbar/logo_cinema.png";
export default function Navbar() {
  const [search, setSearch] = useState({ search: "" });
  const [page, setPage] = useState(1);
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  function handlerChangeSearch(event) {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  }
  const { getMoviesBySearch } = useContext(MovieContext);
  function handlerSubmit(event) {
    event.preventDefault();
    getMoviesBySearch({ query: search, page });
    navigate("/search");
  }

  return (
    <section>
      <nav class="navbar navbar-expand-lg p-3 border-bottom container_navbar ">
        <div class="container-fluid">
          <Link class="navbar-brand mx-2" to={"/"}>
            <img
              src={logo}
              alt="logo_cinema"
              width={"35"}
              style={{ transform: "scale(2.2)" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link
                    to={"/"}
                    class="nav-link text-dark mx-5"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Inicio
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    to={"/algo"}
                    class="nav-link  text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    algo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-link text-dark mx-3">
              <form action="" onSubmit={handlerSubmit}>
                <div class="input-group">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder="Buscar película"
                      class="form-control"
                      onChange={handlerChangeSearch}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="justify-content-end"></div>
        </div>
      </nav>
    </section>
  );
}
