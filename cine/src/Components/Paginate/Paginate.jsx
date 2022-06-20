import { useContext } from "react";
import MovieContext from "../../Context/Movies/Movie-context";

function Paginate({ query, functionToExecute }) {
  const { setPage, page } = useContext(MovieContext);

  function handlerPrevious() {
    if (page < 1) {
      setPage(page - 1);
    }
  }
  function handlerFirstNumber() {}
  function handlerMiddleNumber() {}
  function handlerLastNumber() {}
  function handlerNext() {
    setPage(page + 1);
    let search = {
      search: query,
    };
    // console.log(search, "search");
    functionToExecute({ query: search });
  }

  return (
    <div aria-label="" className=" w-50 m-auto">
      <ul class="pagination">
        <li class="page-item disabled">
          <button class="page-link" tabindex="-1" onClick={handlerPrevious}>
            Previous
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={handlerFirstNumber}>
            1
          </button>
        </li>
        <li class="page-item active">
          <button class="page-link" onClick={handlerMiddleNumber}>
            2 <span class="sr-only"></span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={handlerLastNumber}>
            3
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={handlerNext}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
