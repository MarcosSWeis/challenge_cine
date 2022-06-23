import { useContext, useEffect, useState } from "react";
import MovieContext from "../../Context/Movies/Movie-context";

function Paginate({ parameter, functionToExecute, total_pages, current_page }) {
  const [page, setPage] = useState(1);
  let [valuesPaginate, setValuesPaginate] = useState([1, 2, 3]);
  useEffect(() => {
    setPage(1);
    setValuesPaginate([1, 2, 3]);
  }, [parameter]);
  function handlerPrevious() {
    if (page > 1) {
      setPage(page - 1);
    }

    if (page < valuesPaginate[0]) {
      for (let i = valuesPaginate.length - 1, j = 1; i >= 0; i--, j++) {
        valuesPaginate[i] = valuesPaginate[0] - j;
      }
    }
    functionToExecute({ parameter: parameter }, page + 1);
  }
  function handlerFirstNumber() {}
  function handlerMiddleNumber() {}
  function handlerLastNumber() {}
  function handlerNext() {
    setPage(page + 1);
    console.log("ejecuto handlerNext ");

    console.log(page, "page paginate");
    functionToExecute({ parameter: parameter }, page + 1);
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
            } ${total_pages < valuesPaginate[0] ? "disabled" : ""}`}
            onClick={handlerFirstNumber}
          >
            {valuesPaginate[0]}
          </button>
        </li>
        <li class="page-item ">
          <button
            class={`page-link ${
              valuesPaginate[1] == current_page ? "active" : ""
            } ${total_pages < valuesPaginate[1] ? "disabled" : ""}
            `}
            onClick={handlerMiddleNumber}
          >
            {valuesPaginate[1]}
          </button>
        </li>
        <li class="page-item">
          <button
            class={`page-link ${
              valuesPaginate[2] == current_page ? "active" : ""
            }  
            ${total_pages < valuesPaginate[2] ? "disabled" : ""}`}
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
