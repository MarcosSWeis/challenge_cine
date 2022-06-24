import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../Context/Movies/Movie-context";

import CSS from "./navbar.module.css";
export default function Navbar() {
  const [search, setSearch] = useState({ search: "" });
  const { getMoviesBySearch, page, setPage, setValuesPaginate } =
    useContext(MovieContext);
  let navigate = useNavigate();
  function handlerChangeSearch(event) {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  }
  function navigateToSearch() {
    navigate("/search", {
      state: { query: search.search },
    });
  }
  function handlerSubmit(event) {
    event.preventDefault();
    getMoviesBySearch({ parameter: search.search }, 1);
    navigateToSearch();
  }

  return (
    <div className={`${CSS.container_navbar}`}>
      <div className={`${CSS.inner_container}`}>
        <h1 className={`${CSS.h1}`}></h1>
        <h2 className={`${CSS.h2}`}></h2>
        <div>
          <form
            action=""
            className={`${CSS.inputSearch} m-auto `}
            onSubmit={handlerSubmit}
          >
            <input
              type="text"
              name="search"
              placeholder="Busque su película"
              id=""
              className={`${CSS.inputSearch} form-control`}
              onChange={handlerChangeSearch}
            />
            <button
              className={`btn btn-outline-secondary ${CSS.btnSearch} pb-3 `}
              type="submit"
            >
              <i class={`bi bi-search ${CSS.iconSearch}`}></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
