import { useContext } from "react";
import Paginate from "../../Components/Paginate/Paginate.jsx";
import SearchResults from "../../Components/searchResults/SearchResults.jsx";
import MovieContext from "../../Context/Movies/Movie-context";
function Home() {
  return (
    <div>
      <div className="image-grid mt-4 w-75 m-auto">
        {moviesBySearch.length > 0 &&
          moviesBySearch.map((results) => (
            <SearchResults img={results.poster_path} />
          ))}
        {moviesBySearch.length > 0 && <Paginate />}
      </div>
    </div>
  );
}

export default Home;
