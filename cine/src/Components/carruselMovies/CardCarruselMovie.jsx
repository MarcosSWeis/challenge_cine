import { Link } from "react-router-dom";

export default function CardCarruselMovie({ img, id }) {
  return (
    <div class="movie" id="movie">
      <Link to={`/movie/${id}`} key={id}>
        <img src={`https://image.tmdb.org/t/p/w185/${img} `} />
      </Link>
    </div>
  );
}
