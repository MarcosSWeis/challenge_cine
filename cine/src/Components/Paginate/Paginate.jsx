import { useContext, useState } from "react";
import MovieContext from "../../Context/Movies/Movie-context";

function Paginate({ parameter, functionToExecute, total_pages, current_page }) {
  const { setPage, page, valuesPaginate } = useContext(MovieContext);

  function handlerPrevious() {
    if (page > 1) {
      setPage(page - 1);
    }
    functionToExecute({ parameter: parameter });
  }
  function handlerFirstNumber() {}
  function handlerMiddleNumber() {}
  function handlerLastNumber() {}
  function handlerNext() {
    setPage(page + 1);
    console.log("ejecuto handlerNext ");

    console.log(page, "page paginate");
    functionToExecute({ parameter: parameter });
    // console.loparameterg(search, "search");
  }

  console.log(page, "page paginate fuera de lafuncion");

  if (page > valuesPaginate[2]) {
    for (let i = 0, j = 1; i < valuesPaginate.length; i++, j++) {
      valuesPaginate[i] = valuesPaginate[2] + j;
    }
  }

  console.log(valuesPaginate, "valuesPaginate");
  return (
    <div aria-label="" className=" w-75 m-auto ">
      <ul class="pagination w-100 justify-content-center">
        <li class={`page-item ${page > 1 ? "" : "disabled"} `}>
          <button class="page-link" tabindex="-1" onClick={handlerPrevious}>
            Previous
          </button>
        </li>
        <li class="page-item">
          <button
            class={`page-link ${
              valuesPaginate[0] == current_page ? "active" : ""
            }`}
            onClick={handlerFirstNumber}
          >
            {valuesPaginate[0]}
          </button>
        </li>
        <li class="page-item ">
          <button
            class={`page-link ${
              valuesPaginate[1] == current_page ? "active" : ""
            }`}
            onClick={handlerMiddleNumber}
          >
            {valuesPaginate[1]}
          </button>
        </li>
        <li class="page-item">
          <button
            class={`page-link ${
              valuesPaginate[2] == current_page ? "active" : ""
            }`}
            onClick={handlerLastNumber}
          >
            {valuesPaginate[2]}
          </button>
        </li>
        <li class={`page-item ${!(page < total_pages) ? "disabled" : ""} `}>
          <button class="page-link" onClick={handlerNext}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
