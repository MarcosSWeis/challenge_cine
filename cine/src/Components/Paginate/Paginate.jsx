import { useContext } from "react";
import MovieContext from "../../Context/Movies/Movie-context";

function Paginate({ parameter, functionToExecute, total_pages, current_page }) {
  const { setPage, page } = useContext(MovieContext);
  console.log(parameter, "query que viene de paginate en este caso");
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
    // console.loparameterg(search, "search");
    functionToExecute({ parameter: parameter });
  }
  let valuesPaginate = [1, 2, 3];
  if (page > valuesPaginate[3]) {
    for (let i = 0; i < valuesPaginate.length; i++) {
      valuesPaginate[i] = valuesPaginate[3] + i + page;
    }
  }
  return (
    <div aria-label="" className=" w-50 m-auto ">
      <ul class="pagination w-75 m-auto">
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
